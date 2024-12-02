const Supplier = require('../models/supplier');

// Criar um novo fornecedor
exports.createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todos os fornecedores
exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar um fornecedor pelo ID
exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      res.status(200).json(supplier);
    } else {
      res.status(404).json({ error: 'Fornecedor não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um fornecedor
exports.updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      await supplier.update(req.body);
      res.status(200).json(supplier);
    } else {
      res.status(404).json({ error: 'Fornecedor não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar um fornecedor
exports.deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      await supplier.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Fornecedor não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};