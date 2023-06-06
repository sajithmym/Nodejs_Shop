const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CART = sequelize.define('cart',{
  id : {
    type : Sequelize.INTEGER,
    allowNull : false,
    primaryKey : true,
    autoIncrement : true
  }
})

module.exports = CART