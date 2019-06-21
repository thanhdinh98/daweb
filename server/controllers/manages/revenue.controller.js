/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-str */
const db = require('../../models/index');

const statisticByCinema = async (req, res) => {
  const { fromTime, toTime } = req.query;

  let statistic = await db.sequelize.query('SELECT cnm."name", SUM(tk."price") as total, COUNT(tk.*) as tickets\
  FROM "Tickets" as tk\
  JOIN "Bookings" as bk ON tk."bookingID" = bk."bookingID"\
  JOIN "Showtimes" as st ON st."showtimeID" = bk."showtimeID"\
  JOIN "Rooms" as r ON st."roomID" = r."roomID"\
  RIGHT JOIN "Cinemas" as cnm ON cnm."cinemaID" = r."cinemaID"\
  AND st."startTime" >= :fromTime AND st."startTime" <= :toTime\
  GROUP BY cnm."cinemaID", cnm."name" ',
  { replacements: { fromTime, toTime }, type: db.sequelize.QueryTypes.SELECT });

  statistic = statistic.map((x) => {
    if (x.total == null) {
      x.total = 0;
    }
    return x;
  });

  return res.send(statistic);
};

const statisticByMovie = async (req, res) => {
  const { fromTime, toTime } = req.query;

  let statistic = await db.sequelize.query('SELECT mv."nameMovie",  SUM(tk."price") as total, COUNT(tk.*) as tickets\
  FROM "Tickets" as tk\
  JOIN "Bookings" as bk ON tk."bookingID" = bk."bookingID"\
  JOIN "Showtimes" as st ON st."showtimeID" = bk."showtimeID"\
  RIGHT JOIN "Movies" as mv ON mv."movieID" = st."movieID"\
  AND st."startTime" >= :fromTime AND st."startTime" <= :toTime\
  GROUP BY mv."movieID", mv."nameMovie"',
  { replacements: { fromTime, toTime }, type: db.sequelize.QueryTypes.SELECT });

  statistic = statistic.map((x) => {
    if (x.total == null) {
      x.total = 0;
    }
    return x;
  });

  return res.send(statistic);
};


module.exports = { statisticByCinema, statisticByMovie };
