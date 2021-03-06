module.exports = (sequelize, Datatypes) => {
  const Movie = sequelize.define('Movie', {
    movieID: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nameMovie: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: Datatypes.STRING,
    },
    genre: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    release: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    poster: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    duration: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    trailer: {
      type: Datatypes.STRING,
    },
  }, {
    timestamps: false,
  });

  Movie.associate = (models) => {
    Movie.hasMany(models.Showtime, {
      foreignKey: 'movieID',
    });
  };

  return Movie;
};
