module.exports = (sequelize, Datatypes) => {
  const Showtime = sequelize.define('Showtime', {
    showtimeId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      default: sequelize.fn('uuid_generate_v4'),
    },
    roomId: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: Datatypes.INTEGER,
    },
    startTime: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: Datatypes.DATE,
      allowNull: false,
    },
  });

  Showtime.associate = (models) => {
    Showtime.belongsTo(models.Movie, {
      foreignKey: 'movieId',
      targetKey: 'movieId',
    });
    Showtime.belongsTo(models.Room, {
      foreignKey: 'roomId',
      targetKey: 'roomId',
    });
    Showtime.hasMany(models.Booking, {
      foreignKey: 'showtimeId',
      targetKey: 'showtimeId',
    });
  };

  return Showtime;
};
