const Sequelize = require('sequelize');

const sequelize = new Sequelize('pro', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
