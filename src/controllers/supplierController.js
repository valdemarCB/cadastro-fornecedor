const Supplier = require('../models/supplier');

// Criar Fornecedor
exports.createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar Todos os Fornecedores
exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar Fornecedor por ID
exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      res.status(200).json(supplier);
    } else {
      res.status(404).json({ message: 'Fornecedor não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Atualizar Fornecedor
exports.updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      await supplier.update(req.body);
      res.status(200).json(supplier);
    } else {
      res.status(404).json({ message: 'Fornecedor não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar Fornecedor
exports.deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      await supplier.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Fornecedor não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};