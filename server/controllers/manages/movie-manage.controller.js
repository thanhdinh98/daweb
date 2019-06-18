const models = require('../../models');

const addMovie = async (req, res) => {
  let alert = 'Your movie has updated successfully.';
  const {
    nameMovie, release, poster, genre, duration, description, trailer,
  } = req.body;

  if (!nameMovie || !release || !poster || !genre || !duration) {
    alert = 'Please fill out all requirement fields!';
    return res.send({ error: true, message: alert });
  }

  const movie = await models.Movie.findOne({
    where: {
      nameMovie,
    },
  });

  if (!movie) {
    await models.Movie.create({
      nameMovie,
      duration,
      release,
      poster,
      description,
      trailer,
      genre,
    });
    return res.send({ error: false, message: alert });
  }
  alert = 'This movie has been added already!';
  return res.send({ error: true, message: alert });
};

const deleteMovie = async (req, res) => {
  let alert = 'Your movie has been deleted successfully';
  const { movieID } = req.body;

  const movie = models.Movie.findOne({
    where: {
      movieID,
    },
  });

  if (movie) {
    await models.Movie.destroy({
      where: {
        movieID,
      },
    }).catch((err) => {
      console.log(err);
    });
    return res.send({ error: false, message: alert });
  }
  alert = 'Cannot find any movies you has requested';
  return res.send({ error: true, message: alert });
};

module.exports = { addMovie, deleteMovie };
