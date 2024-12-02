const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./src/database'); // Ajuste o caminho aqui

// Modelos
const Product = require('./src/models/product');
const Supplier = require('./src/models/supplier');
const ProductSupplier = require('./src/models/productSupplier');

// Controladores
const productController = require('./src/controllers/productController');
const supplierController = require('./src/controllers/supplierController');

// Middleware para o Express entender JSON
app.use(bodyParser.json());

// Testando a rota raiz
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

// Rotas para Produto
app.post('/products', productController.createProduct);
app.get('/products', productController.getAllProducts);
app.get('/products/:id', productController.getProductById);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

// Rotas para Fornecedor
app.post('/suppliers', supplierController.createSupplier);
app.get('/suppliers', supplierController.getAllSuppliers);
app.get('/suppliers/:id', supplierController.getSupplierById);
app.put('/suppliers/:id', supplierController.updateSupplier);
app.delete('/suppliers/:id', supplierController.deleteSupplier);

// Sincronizando o banco de dados e iniciando o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000/`);
  });
});