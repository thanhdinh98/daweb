/* eslint-disable prefer-destructuring */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-return-assign */
/* eslint-disable no-multi-str */
const db = require('../../models/index');
const genQRCode = require('./generate-qr-code');

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const getHistoryUser = async (userID) => {
  const history = await db.sequelize.query('SELECT A."timeBooking", B."nameMovie", B."name", B."address", B."room", B."type", A."ticketID", A."rowOfSeatID", A."colOfSeatID", A."price"\
    FROM\
    (SELECT "b"."timeBooking", "b"."showtimeID", "tk".* FROM "Bookings" AS "b"\
    JOIN "Tickets" AS "tk" ON "tk"."bookingID" = "b"."bookingID"\
    AND "userID" = :ID)AS A\
    JOIN\
    (SELECT "st"."showtimeID", "mv"."nameMovie", "cnm"."name", "cnm"."address", "r"."name" as "room", "r"."type"\
    FROM "Showtimes" as "st" \
    JOIN "Movies" as "mv" ON "st"."movieID" = "mv"."movieID"\
    JOIN "Rooms" as "r" ON "r"."roomID" = "st"."roomID"\
    JOIN "Cinemas" as "cnm" ON "cnm"."cinemaID" = "r"."cinemaID") AS B\
    ON A."showtimeID" = B."showtimeID"\
    ORDER BY A."timeBooking" DESC',
  { replacements: { ID: userID }, type: db.sequelize.QueryTypes.SELECT });


  return history;
};

const beautifulHistory = async (history) => {
  const beautyHistory = [];
  const groupedHistory = groupBy(history, 'timeBooking');

  for (const [key, value] of Object.entries(groupedHistory)) {
    const obj = {};
    obj.timeBooking = key;

    obj.nameMovie = value[0].nameMovie;
    obj.address = value[0].address;
    obj.room = value[0].room;
    obj.type = value[0].type;

    const tickets = [];
    for (const e of value) {
      const ticket = {};
      ticket.rowOfSeatID = e.rowOfSeatID;
      ticket.colOfSeatID = e.colOfSeatID;
      ticket.price = e.price;
      const qrCode = await genQRCode.generateQRCode(`Codegym - BookingCinema\n${e.ticketID}`);
      ticket.qrcode = qrCode;

      tickets.push(ticket);
    }

    obj.ticket = tickets;
    beautyHistory.push(obj);
  }

  return beautyHistory;
};

const getHistoryBooking = async (req, res) => {
  const userID = res.locals.user.userID;
  const history = await getHistoryUser(userID);
  const beautyHistory = await beautifulHistory(history);
  return res.send(beautyHistory);
};

module.exports = { getHistoryUser, getHistoryBooking };
