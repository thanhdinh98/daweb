module.exports = (sequelize, Datatypes) => {
  const Booking = sequelize.define('Booking', {
    bookingId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    showtimeId: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    userId: {
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
      foreignKey: 'bookingId',
      targetKey: 'bookingId',
    });
  };

  return Booking;
};
