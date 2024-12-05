const { Sequelize } = require('sequelize');
const sequelize = require('../../database'); // Importando corretamente o database
const Product = require('./product');
const Supplier = require('./supplier');

// Associação muitos-para-muitos
const ProductSupplier = sequelize.define('ProductSupplier', {});

// Definindo os relacionamentos
Product.belongsToMany(Supplier, { through: ProductSupplier });
Supplier.belongsToMany(Product, { through: ProductSupplier });

module.exports = ProductSupplier;