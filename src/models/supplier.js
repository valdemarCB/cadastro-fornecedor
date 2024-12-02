const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Caminho correto

// Definição do modelo Fornecedor
const Supplier = sequelize.define('Supplier', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  contact: {
    type: DataTypes.STRING,
  },
});

module.exports = Supplier;