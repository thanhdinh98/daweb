const Sequelize = require('sequelize');
const db = require('./db');

const Cinema = require('./cinema.model');

const Room = db.define('Room', {
  roomId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  cinemaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
  },
  rowSize: {
    type: Sequelize.INTEGER,
  },
  columnSize: {
    type: Sequelize.INTEGER,
  },
});

Room.belongsTo(Cinema, {
  foreignKey: 'cinemaId',
});

module.exports = Room;
