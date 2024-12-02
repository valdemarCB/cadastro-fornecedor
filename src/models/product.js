const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Caminho correto

// Definição do modelo Produto
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