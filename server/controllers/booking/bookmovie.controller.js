/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
const db = require('../../models/index');
const models = require('../../models');
const sendSMS = require('./sendSMS');

const Op = db.Sequelize.Op;

// return true if showtime exists, startime > now()
const isValidShowtimeBooking = async (showtimeID) => {
  if (!showtimeID) {
    return false;
  }

  const showtime = await models.Showtime.findOne({
    where: {
      showtimeID,
      startTime: {
        [Op.gte]: new Date(),
      },
    },
  });

  if (showtime) {
    return true;
  }
  return false;
};

// function return the capacity of room where movie is showed
const getSizeOfRoom = async (showtimeID) => {
  const room = await db.sequelize.query('SELECT "rowSize", "columnSize" FROM "Showtimes" AS "st" JOIN "Rooms" AS "r" ON "st"."roomID" = "r"."roomID" AND "showtimeID" = :ID',
    { replacements: { ID: showtimeID }, type: db.sequelize.QueryTypes.SELECT });

  return room[0];
};

// function return price of showtime
const priceShowtime = async (showtimeID) => {
  const showtime = await models.Showtime.findOne({
    where: {
      showtimeID,
    },
  });

  return showtime.dataValues.price;
};

// get selected seat of showtime
const getSelectedSeatOfShowtime = async (showtimeID, tran) => {
  const bookingOnShowtime = await models.Booking.findAll({
    where: {
      showtimeID,
    },
  });

  const bookingIDs = bookingOnShowtime.map(x => x.dataValues.bookingID);
  const selectedSeats = await models.Ticket.findAll({
    where: {
      bookingID: {
        [Op.in]: bookingIDs,
      },
    },
  }, { transaction: tran });

  return selectedSeats.map(seat => [seat.dataValues.rowOfSeatID, seat.dataValues.colOfSeatID]);
};

// check element in array
const isInArray = (needle, haystack) => {
  // bug: needle === haystack
  const needleJSON = JSON.stringify(needle);
  const haystackJSON = JSON.stringify(haystack);
  if (haystackJSON.indexOf(needleJSON) === -1) {
    return false;
  }
  return true;
};

const getPhoneNumber = async (userID) => {
  const user = await models.User.findOne({
    where: {
      userID,
    },
  });
  if (!user) {
    return;
  }
  // eslint-disable-next-line consistent-return
  return user.phoneNumber;
};

const bookingMovie = async (req, res) => {
  const userID = res.locals.user.userID;
  const { showtimeID, seats } = req.body;

  const isValid = await isValidShowtimeBooking(showtimeID);
  if (!isValid) {
    return res.send({ error: true, message: 'Invalid Showtime or Showtime was end.' });
  }

  const sizeRoomOfShowtime = await getSizeOfRoom(showtimeID);

  // check seat is valid
  if (seats.length === 0) {
    return res.send({ error: true, message: 'Please pick seats.' });
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const seat of seats) {
    if (seat[1] < 0 || seat[1] >= sizeRoomOfShowtime.columnSize
       || seat[0] < 0 || seat[0] >= sizeRoomOfShowtime.rowSize) {
      return res.send({
        error: true, message: 'Invalid Seat', seat, sizeRoomOfShowtime,
      });
    }
  }

  // check seat was selected
  const selectedSeatOfShowtime = await getSelectedSeatOfShowtime(showtimeID);

  for (const seat of seats) {
    if (isInArray(seat, selectedSeatOfShowtime)) {
      return res.send({ error: true, message: 'Seat was selected', seat });
    }
  }

  // booking
  const price = await priceShowtime(showtimeID);

  const booking = await models.Booking.create({
    showtimeID,
    userID,
    timeBooking: new Date(),
    totalPrice: price * seats.length,
  });

  // insert ticket
  // eslint-disable-next-line prefer-destructuring
  const bookingID = booking.dataValues.bookingID;

  seats.forEach(async (seat) => {
    await models.Ticket.create({
      bookingID,
      rowOfSeatID: seat[0],
      colOfSeatID: seat[1],
      price,
    });
  });


  // after inserted successfull - send sms
  // let content = 'Codegym - Cinema.\nThanks for your booking.\nYour seat: ';
  // seats.forEach((seat) => {
  //   const beautifulSeat = String.fromCharCode((`${seat[0]}`).charCodeAt(0) + 17);
  //   content += beautifulSeat;
  //   content += seat[1];
  //   content += ', ';
  // });
  // content = content.slice(0, content.length - 2);
  // content += '.';
  // const phoneNumber = await getPhoneNumber(userID);
  // if (phoneNumber) {
  //   sendSMS(phoneNumber, content);
  // }

  return res.send({ error: false, message: 'Booking successfull.' });
};

const bookingMovieTransaction = async (req, res) => {
  const userID = res.locals.user.userID;
  const { showtimeID, seats } = req.body;

  const isValid = await isValidShowtimeBooking(showtimeID);
  if (!isValid) {
    return res.send({ error: true, message: 'Invalid Showtime or Showtime was end.' });
  }
  const sizeRoomOfShowtime = await getSizeOfRoom(showtimeID);

  // check seat is valid
  if (seats.length === 0) {
    return res.send({ error: true, message: 'Please pick seats.' });
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const seat of seats) {
    if (seat[1] < 0 || seat[1] >= sizeRoomOfShowtime.columnSize
       || seat[0] < 0 || seat[0] >= sizeRoomOfShowtime.rowSize) {
      return res.send({ error: true, message: 'Invalid Seat', seat });
    }
  }

  // check seat was selected


  // booking
  // eslint-disable-next-line max-len
  db.sequelize.transaction({ isolationLevel: db.Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE }, async (tran) => {
    const selectedSeatOfShowtime = await getSelectedSeatOfShowtime(showtimeID, tran);
    for (const seat of seats) {
      if (isInArray(seat, selectedSeatOfShowtime)) {
        return res.send({ error: true, message: 'Seat was selected', seat });
      }
    }

    const price = await priceShowtime(showtimeID);

    // insert booking - ticket
    const booking = await models.Booking.create({
      showtimeID,
      userID,
      timeBooking: new Date(),
      totalPrice: price * seats.length,
    }, { transaction: tran });

    const bookingID = booking.dataValues.bookingID;
    for (const seat of seats) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await models.Ticket.create({
          bookingID,
          rowOfSeatID: seat[0],
          colOfSeatID: seat[1],
          price,
        }, { transaction: tran });
      } catch (err) {
        res.send(err);
        // eslint-disable-next-line consistent-return
        return;
      }
    }
  });
  return res.send('okkkk');
  // after inserted successfull - send sms
  // let content = 'Thanks for your booking. Your seat: ';
  // seats.forEach((seat) => {
  //   const beautifulSeat = String.fromCharCode((`${seat[0]}`).charCodeAt(0) + 16);
  //   content += beautifulSeat;
  //   content += ', ';
  // });
  // content = content.slice(0, content.length - 2);
  // const phoneNumber = await getPhoneNumber(userID);
  // sendSMS(phoneNumber, content);
};

const selectedShowtime = async (req, res) => {
  const { showtimeID } = req.body;

  const isShowtime = await isValidShowtimeBooking(showtimeID);

  if (isShowtime === false) {
    return res.send({ error: true, message: 'Invalid showtime.' });
  }

  const sizeRoom = await getSizeOfRoom(showtimeID);
  // 0. empty
  // 1. booked
  const seats = Array(sizeRoom.rowSize * sizeRoom.columnSize).fill(0);

  const selectedSeat = await getSelectedSeatOfShowtime(showtimeID);

  selectedSeat.forEach((seat) => {
    const numberOrder = seat[0] * sizeRoom.columnSize + seat[1] - 1;
    seats[numberOrder] = 1;
  });

  return res.send({ error: false, ...sizeRoom, seats });
};

module.exports = {
  bookingMovie,
  bookingMovieTransaction,
  selectedShowtime,
};
