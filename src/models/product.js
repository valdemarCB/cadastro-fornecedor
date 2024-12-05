const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Correto, pois o 'database.js' está dentro de 'src'

// Definindo o modelo de Produto
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  barcode: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = Product;