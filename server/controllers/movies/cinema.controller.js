const models = require('../../models');

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
    attributes: [['cinemaID', 'id'], 'name'],
    include: [
      {
        model: models.Room,
        require: true,
        attributes: [],
        include: [
          {
            model: models.Showtime,
            require: true,
            attributes: [],
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
          },
        ],
      },
    ],
  });
  if (cinema) {
    return res.send({ error: false, message: alert, cinema });
  }
  alert = 'Cannot find any cinema';
  return res.send({ error: true, message: alert });
};

module.exports = {
  allCinema, searchCinemaByName, getRoomByCinemaID, getCinemaByMovieID,
};
