module.exports = (sequelize, Datatypes) => {
  const Booking = sequelize.define('Booking', {
    bookingID: {
      type: Datatypes.UUID,
      primaryKey: true,
      defaultValue: Datatypes.UUIDV4,
    },
    showtimeID: {
      type: Datatypes.UUID,
      allowNull: false,
    },
    userID: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    timeBooking: {
      type: Datatypes.DATE,
    },
    totalPrice: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
  });

  Booking.associate = (models) => {
    Booking.hasMany(models.Ticket, {
      foreignKey: 'bookingID',
      targetKey: 'bookingID',
    });

    Booking.belongsTo(models.User, {
      foreignKey: 'userID',
    });
  };

  return Booking;
};
