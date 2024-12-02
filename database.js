const { Sequelize } = require('sequelize');

// Criação da instância do Sequelize para o banco SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Caminho do banco de dados
});

module.exports = sequelize;