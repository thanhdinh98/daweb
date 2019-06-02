module.exports = (sequelize, Datatypes) => {
  const Movie = sequelize.define('Movie', {
    movieId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Datatypes.STRING,
    },
    release: {
      type: Datatypes.DATE,
    },
    poster: {
      type: Datatypes.STRING,
    },
    duration: {
      type: Datatypes.DATE,
    },
  });

  return Movie;
};
