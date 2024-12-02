const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Caminho correto
const Product = require('./product');
const Supplier = require('./supplier');

// Modelo de associação Produto-Fornecedor
const ProductSupplier = sequelize.define('ProductSupplier', {
  // Campos extras da tabela de associação (se houver)
});

// Estabelecendo o relacionamento muitos-para-muitos entre Produto e Fornecedor
Product.belongsToMany(Supplier, { through: ProductSupplier });
Supplier.belongsToMany(Product, { through: ProductSupplier });

module.exports = ProductSupplier;