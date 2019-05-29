const Sequelize = require('sequelize');
const db = require('./db');

const Movie = db.define('Movie', {
  movieId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  release: {
    type: Sequelize.DATE,
  },
  poster: {
    type: Sequelize.STRING,
  },
  duration: {
    type: Sequelize.DATE,
  },
});


module.exports = Movie;
