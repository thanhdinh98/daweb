const _ = require('lodash');
const models = require('../../models');

const beatifyData = cinema => cinema.map((ci) => {
  const time = [];
  for (const room of ci.Rooms) {
    if (!_.isEmpty(room.Showtimes)) {
      time.push(...time, ...room.Showtimes);
    }
  }

  return {
    id: ci.cinemaID,
    name: ci.name,
    showtimes: time,
  };
});

const removeCinemaWithEmptyShowtimes = (cinema) => {
  const result = [];
  for (const ci of cinema) {
    if (!_.isEmpty(ci.showtimes)) {
      result.push(ci);
    }
  }
  return result;
};

const allCinema = async (req, res) => {
  let alert = "Here's all your cinema.";
  const cinema = await models.Cinema.findAll();

  if (cinema) {
    return res.send({ error: false, message: alert, cinema });
  }
  alert = "Can't find any selected cinema.";
  return res.send({ error: true, message: alert });
};

const searchCinemaByName = async (req, res) => {
  let alert = "Here's your cinema";
  const { cinemaName } = req.body;
  const cinema = await models.Cinema.findAll({
    where: {
      name: cinemaName,
    },
  });

  if (cinema) {
    return res.send({ error: false, message: alert });
  }
  alert = 'Cannot find any cinema that you need.';
  return res.send({ error: false, message: alert });
};

const getRoomByCinemaID = async (req, res) => {
  const { cinemaID } = req.query;
  let alert = "Here's all room of cinema!";

  const cinema = await models.Cinema.findAll({
    include: [
      {
        model: models.Room,
        require: true,
      },
    ],
    where: {
      cinemaID,
    },
  });

  if (cinema) {
    return res.send({ error: false, message: alert, cinema });
  }
  alert = "Can't not find any room!";
  return res.send({ error: true, message: 'failed' });
};

const getCinemaByMovieID = async (req, res) => {
  let alert = "Here's your cinema base on movieID.";
  const { movieID } = req.query;

  const cinema = await models.Cinema.findAll({
    attributes: ['cinemaID', 'name'],
    include: [
      {
        model: models.Room,
        require: true,
        attributes: ['cinemaID'],
        include: [
          {
            model: models.Showtime,
            require: true,
            attributes: ['showtimeID', 'startTime'],
            include: [
              {
                model: models.Movie,
                attributes: [],
                require: true,
                where: {
                  movieID,
                },
              },
            ],
            where: {
              movieID,
            },
          },
        ],
      },
    ],
  });

  const result = removeCinemaWithEmptyShowtimes(beatifyData(cinema));

  if (cinema) {
    return res.send({ error: false, message: alert, result });
  }
  alert = 'Cannot find any cinema';
  return res.send({ error: true, message: alert });
};

module.exports = {
  allCinema, searchCinemaByName, getRoomByCinemaID, getCinemaByMovieID,
};
