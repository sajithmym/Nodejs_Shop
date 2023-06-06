const Sequelize = require('sequelize');

// Dbname, User Name, Password, Host Name

const sequelize = new Sequelize('bydindhnbzleku9guqxq', 'uusukslj8qscfhbm', 'uusukslj8qscfhbm', {
  dialect: 'mysql',
  host: 'bydindhnbzleku9guqxq-mysql.services.clever-cloud.com'
});

module.exports = sequelize;
