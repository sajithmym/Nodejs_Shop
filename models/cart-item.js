const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CART_item = sequelize.define('cart_item',{
  id : {
    type : Sequelize.INTEGER,
    allowNull : false,
    primaryKey : true,
    autoIncrement : true
  },
  quentity : Sequelize.INTEGER
})

module.exports = CART_item