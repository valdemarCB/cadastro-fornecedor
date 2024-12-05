const Product = require('../models/product');  // Correto, pois 'product.js' está dentro de 'models'

// Controladores com as funções de manipulação dos produtos
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, barcode } = req.body;
    const product = await Product.create({ name, description, price, barcode });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Funções para outras operações do CRUD também serão similares