const Supplier = require('../models/supplier');

module.exports = {
  async createSupplier(req, res) {
    const { name, cnpj, address, contact } = req.body;
    try {
      const supplier = await Supplier.create({ name, cnpj, address, contact });
      res.status(201).json(supplier);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAllSuppliers(req, res) {
    try {
      const suppliers = await Supplier.findAll();
      res.status(200).json(suppliers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getSupplierById(req, res) {
    const { id } = req.params;
    try {
      const supplier = await Supplier.findByPk(id);
      if (!supplier) {
        return res.status(404).json({ error: 'Supplier not found' });
      }
      res.status(200).json(supplier);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateSupplier(req, res) {
    const { id } = req.params;
    const { name, cnpj, address, contact } = req.body;
    try {
      const supplier = await Supplier.findByPk(id);
      if (!supplier) {
        return res.status(404).json({ error: 'Supplier not found' });
      }
      await supplier.update({ name, cnpj, address, contact });
      res.status(200).json(supplier);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteSupplier(req, res) {
    const { id } = req.params;
    try {
      const supplier = await Supplier.findByPk(id);
      if (!supplier) {
        return res.status(404).json({ error: 'Supplier not found' });
      }
      await supplier.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};