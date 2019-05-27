const Sequelize = require('sequelize');
const db = require('./db');


const Movie = require('./movie.model');
const Room = require('./room.model');
const Booking = require('./booking.model');


const Showtime = db.define('Showtime', {
  showtimeId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
  },
  roomId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  movieId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  startTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Showtime.belongsTo(Movie, { foreignKey: 'movieId', targetKey: 'movieId' });
Showtime.belongsTo(Room, { foreignKey: 'roomId', targetKey: 'roomId' });
Showtime.hasMany(Booking, { foreignKey: 'showtimeId', targetKey: 'showtimeId' });

module.exports = Showtime;
