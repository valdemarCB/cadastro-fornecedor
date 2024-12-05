const { Sequelize } = require('sequelize');

// Instância do Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',  // Ou './database.sqlite' se estiver na raiz
});

module.exports = sequelize;



