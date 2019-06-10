const Sequelize = require('sequelize');
const models = require('../../models');

// eslint-disable-next-line prefer-destructuring
const Op = Sequelize.Op;

const allMovie = async (req, res) => {
  let alert = "Here's all your movies.";
  const movies = models.Movie.findAll({ limit: 15 });
  if (movies) {
    return res.send({ error: false, message: alert, movies });
  }
  alert = "Can't find any movies you need.";
  return res.send({ error: true, message: alert });
};

const getMovieByID = async (req, res) => {
  let alert = "Here's your selection movie";
  const { movieID } = req.body;
  const movie = models.Movie.findOne({
    where: {
      movieID,
    },
  });
  if (movie) {
    return res.send({ error: false, message: alert, movie });
  }
  alert = 'Cannot find any movie that you need.';
  return res.send({ error: true, message: alert });
};

const searchMovieByName = async (req, res) => {
  let alert = "Here's your selection movie";
  const { movieName } = req.body;
  const movie = models.Movie.findAll({
    where: {
      nameMovie: {
        [Op.substring]: movieName,
      },
    },
  });


  if (movie) {
    return res.send({ error: false, message: alert, movie });
  }
  alert = 'Cannot find any movies you has requested';
  return res.send({ error: true, message: alert });
};

module.exports = { allMovie, getMovieByID, searchMovieByName };
