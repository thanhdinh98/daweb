/* eslint-disable no-tabs */
/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-multi-str */
/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
const db = require('../../models/index');
const models = require('../../models');
const sendSMS = require('./sendSMS');
const sendEmail = require('../accounts/sendemail.controller');
const genQRCode = require('../ticket/generate-qr-code');

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
  const room = await db.sequelize.query('SELECT "rowSize", "columnSize", "r"."name", "r"."type" FROM "Showtimes" AS "st" JOIN "Rooms" AS "r" ON "st"."roomID" = "r"."roomID" AND "showtimeID" = :ID',
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


const ticketAlreadyBooked = async (bookingID) => {
  const tickets = await db.sequelize.query('SELECT A."timeBooking", B."nameMovie", B."name", B."address", B."room", B."type", A."ticketID", A."rowOfSeatID", A."colOfSeatID", A."price"\
  FROM\
  (SELECT "b"."timeBooking", "b"."showtimeID", "tk".* FROM "Bookings" AS "b"\
  JOIN "Tickets" AS "tk" ON "tk"."bookingID" = "b"."bookingID"\
  AND "b"."bookingID" = :bookingIDSS)AS A\
  JOIN\
  (SELECT "st"."showtimeID", "mv"."nameMovie", "cnm"."name", "cnm"."address", "r"."name" as "room", "r"."type"\
  FROM "Showtimes" as "st"\
  JOIN "Movies" as "mv" ON "st"."movieID" = "mv"."movieID"\
  JOIN "Rooms" as "r" ON "r"."roomID" = "st"."roomID"\
  JOIN "Cinemas" as "cnm" ON "cnm"."cinemaID" = "r"."cinemaID") AS B\
  ON A."showtimeID" = B."showtimeID"\
  ORDER BY A."timeBooking" DESC\
  ',
  { replacements: { bookingIDSS: bookingID }, type: db.sequelize.QueryTypes.SELECT });

  return tickets;
};

const makeContentForOneTicket = async (ticket) => {
  const qrCode = await genQRCode.generateQRCode(ticket.ticketID);
  return `<div style="text-align: center;">
  <div style="padding: 10px; font-size: 20px; font-weight: bold;">
    TICKET
  </div>
</div>
<br>
<div style="height: 140px; padding: 40px; width: 50%; margin: auto; background-color: rgba(255,140,0,1); border: none; border-radius: 20px; top: 10px">
  <div style="float: left; width: 70%; height: auto; overflow: hidden;">
    <div style="margin-left: 15%; background-color: white; width: 80%; height: auto; padding: 10px; border: none; border-radius: 10px">
      <b>Cinema:</b> ${ticket.name}.
      <br>
      <b>Movie name:</b> ${ticket.nameMovie}.
      <br>
      <b>Room:</b> ${ticket.room}.
      <br>
      <b>Type:</b> ${ticket.type}.
      <br>
      <b>Price:</b> ${ticket.price} VND.
      <br>
      <b>Seats:</b> ${String.fromCharCode((`${ticket.rowOfSeatID}`).charCodeAt(0) + 17) + (ticket.colOfSeatID + 1)}.
    </div>	
  </div>
  <div style="float: right; width: 30%; height: auto; padding-top: 20px">
    <div>
      <center>
        <img src="${qrCode}" width="100px" height="100px">	
      </center>
    </div>
  </div>
</div>
<br>`;
};

const makeContentForBooking = async (tickets) => {
  let content = '';
  for (const ticket of tickets) {
    content += await makeContentForOneTicket(ticket);
  }

  return content;
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
        error: true, message: 'Invalid Seat', seat,
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
  for (const seat of seats) {
    await models.Ticket.create({
      bookingID,
      rowOfSeatID: seat[0],
      colOfSeatID: seat[1],
      price,
    });
  }

  // after inserted successfull - send sms
  let content = 'Codegym - Cinema.\nThanks for your booking.\nYour seats: ';
  seats.forEach((seat) => {
    const beautifulSeat = String.fromCharCode((`${seat[0]}`).charCodeAt(0) + 17);
    content += beautifulSeat;
    content += (seat[1] + 1);
    content += ', ';
  });
  content = content.slice(0, content.length - 2);
  content += '.';
  const phoneNumber = await getPhoneNumber(userID);
  if (phoneNumber) {
    sendSMS(phoneNumber, content);
  }

  // after inserted successfull - send email
  const tickets = await ticketAlreadyBooked(bookingID);
  const contentEmail = await makeContentForBooking(tickets);
  await sendEmail(res.locals.user.email, "CodeGym's CINEMA - Ticket", '', contentEmail);

  return res.send({
    error: false, message: 'Booking successful.', room: sizeRoomOfShowtime.name, type: sizeRoomOfShowtime.type,
  });
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
