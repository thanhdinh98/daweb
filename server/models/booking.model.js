module.exports = (sequelize, Datatypes) => {
  const Booking = sequelize.define('Booking', {
    bookingId: {
      type: Datatypes.INTEGER,
      primary: true,
      default: sequelize.fn('uuid_generate_v4'),
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
