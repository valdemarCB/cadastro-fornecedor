const Product = require('../models/product');
const Supplier = require('../models/supplier');
const ProductSupplier = require('../models/productSupplier'); // Modelo da tabela de associação

// Associar Produto a Fornecedor
exports.createProductSupplier = async (req, res) => {
  try {
    const { productId, supplierId } = req.body;

    // Verificar se o produto e o fornecedor existem
    const product = await Product.findByPk(productId);
    const supplier = await Supplier.findByPk(supplierId);

    if (!product || !supplier) {
      return res.status(404).json({ message: 'Produto ou Fornecedor não encontrado.' });
    }

    // Criar a associação
    const productSupplier = await ProductSupplier.create({ productId, supplierId });
    res.status(201).json(productSupplier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar Fornecedores de um Produto
exports.getSuppliersByProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    const suppliers = await product.getSuppliers();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar Produtos de um Fornecedor
exports.getProductsBySupplier = async (req, res) => {
  try {
    const supplierId = req.params.supplierId;
    const supplier = await Supplier.findByPk(supplierId);

    if (!supplier) {
      return res.status(404).json({ message: 'Fornecedor não encontrado.' });
    }

    const products = await supplier.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar a associação Produto-Fornecedor
exports.deleteProductSupplier = async (req, res) => {
  try {
    const { productId, supplierId } = req.params;

    // Verificar se a associação existe
    const productSupplier = await ProductSupplier.findOne({ where: { productId, supplierId } });

    if (!productSupplier) {
      return res.status(404).json({ message: 'Associação não encontrada.' });
    }

    // Deletar a associação
    await productSupplier.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};