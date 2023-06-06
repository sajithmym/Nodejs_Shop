const Sequelize = require('sequelize');

// DB Name, User Name, Password, Host
const sequelize = new Sequelize('bydindhnbzleku9guqxq', 'uusukslj8qscfhbm', 'SKau7QqL2CFAQAAuC2Kv', {
  dialect: 'mysql',
  host: 'bydindhnbzleku9guqxq-mysql.services.clever-cloud.com'
});

module.exports = sequelize;
