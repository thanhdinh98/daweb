const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || 'postgres://user:pass@postgres:35432/db';
const db = new Sequelize(url);

module.exports = db;
