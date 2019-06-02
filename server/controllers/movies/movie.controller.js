const Movie = require('../../models/movie.model');

const postAllMovie = async (req, res) => {
  let alert = "Here's all your movies.";
  const allMovie = Movie.findAll();
  if (allMovie) {
    return res.send({ error: false, message: alert, allMovie });
  }
  alert = "Can't find any movies you need.";
  return res.send({ error: true, message: alert });
};

module.exports = { postAllMovie };
