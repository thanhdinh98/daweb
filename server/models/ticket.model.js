const Sequelize = require('sequelize');
const db = require('./db');

const Ticket = db.define('Ticket', {
  ticketId: {
    type: Sequelize.UUID,
    primaryKey: true,
    autoIncrement: true,
  },
  bookingId: {
    type: Sequelize.UUID,
    allowNull: false,
    unique: true,
  },
  rowOfSeatId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  colOfSeatId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// const Booking = require('./booking.model');
// Ticket.belongsTo(Booking, {foreignKey: 'bookingId', targetKey: 'bookingId'});

module.exports = Ticket;
