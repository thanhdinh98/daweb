module.exports = (sequelize, Datatypes) => {
  const Showtime = sequelize.define('Showtime', {
    showtimeID: {
      type: Datatypes.UUID,
      primaryKey: true,
      defaultValue: Datatypes.UUIDV4,
    },
    roomID: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    movieID: {
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
  }, {
    timestamps: false,
  });

  Showtime.associate = (models) => {
    Showtime.belongsTo(models.Movie, {
      foreignKey: 'movieID',
      targetKey: 'movieID',
    });
    Showtime.belongsTo(models.Room, {
      foreignKey: 'roomID',
      targetKey: 'roomID',
    });
    Showtime.hasMany(models.Booking, {
      foreignKey: 'showtimeID',
      targetKey: 'showtimeID',
    });
  };

  return Showtime;
};
