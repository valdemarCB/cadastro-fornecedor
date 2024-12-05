const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database'); // Importando corretamente o database

const Supplier = sequelize.define('Supplier', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    unique: true,
  },
  address: {
    type: DataTypes.STRING,
  },
  contact: {
    type: DataTypes.STRING,
  },
});

module.exports = Supplier;