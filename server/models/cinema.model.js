const Sequelize = require('sequelize');
const db = require('./db');

const Cinema = db.define('Cinema', {
  cinemaId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = Cinema;
