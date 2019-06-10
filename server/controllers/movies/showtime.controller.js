const Sequelize = require('sequelize');
const models = require('../../models');

const allShowTime = async (req, res) => {
  let alert = "Here's your all showtimes.";
  const showtime = await models.Showtime.findAll({
    where: {
      startTime: {
        $gte: Sequelize.NOW,
      },
    },
  });

  if (showtime) {
    return res.send({ error: false, message: alert, showtime });
  }

  alert = "Can't find any movies that equal to your selections";
  return res.send({ error: true, message: alert });
};

const searchShowTimeOfMovieBelongToCinema = async (req, res) => {
  let alert = "Here's your all showtime.";
  const { movieID } = req.body;

  const showtime = await models.Showtime.findAll({
    where: {
      movieID,
      startTime: {
        $gte: Sequelize.NOW,
      },
    },
  });

  if (showtime) {
    return res.send({ error: false, message: alert, showtime });
  }
  alert = 'Cannot find any showtime that you need.';
  return res.send({ error: true, message: alert });
};

const searchShowTimeOfCinema = async (req, res) => {
  let alert = "Here's your all showtime.";
  const { cinemaID } = req.body;

  const showtime = await models.Showtime.findAll({
    where: {
      cinemaID, // rewrite
      startTime: {
        $gte: Sequelize.NOW,
      },
    },
  });

  if (showtime) {
    return res.send({ error: false, message: alert, showtime });
  }
  alert = 'Cannot find any showtime that you need.';
  return res.send({ error: false, message: alert });
};

module.exports = { allShowTime, searchShowTimeOfMovieBelongToCinema, searchShowTimeOfCinema };
