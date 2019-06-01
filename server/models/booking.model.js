const Sequelize = require('sequelize');
const db = require('./db');


const Booking = db.define('Booking', {
  bookingId: {
    type: Sequelize.UUID,
    primary: true,
    autoIncreament: true,
  },
  showtimeId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  timeBooking: {
    type: Sequelize.DATE,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Ticket = require('./ticket.model');

Booking.hasMany(Ticket, { foreignKey: 'bookingId', targetKey: 'bookingId' });

module.exports = Booking;
