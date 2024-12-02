const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Product = require('./product');
const Supplier = require('./supplier');

// Definindo a relação muitos-para-muitos
const ProductSupplier = sequelize.define('ProductSupplier', {
  ProductId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  SupplierId: {
    type: DataTypes.INTEGER,
    references: {
      model: Supplier,
      key: 'id',
    },
  },
});

// Estabelecendo a relação de muitos para muitos entre Produto e Fornecedor
Product.belongsToMany(Supplier, { through: ProductSupplier });
Supplier.belongsToMany(Product, { through: ProductSupplier });

module.exports = ProductSupplier;