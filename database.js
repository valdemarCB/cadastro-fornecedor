const { Sequelize } = require('sequelize');

// Instancia do Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database.sqlite', // Localização do banco de dados SQLite
});

module.exports = sequelize;