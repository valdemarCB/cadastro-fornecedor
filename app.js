const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database'); // Conexão com o banco de dados

// Modelos (certifique-se de criar os arquivos dos modelos, como product.js e supplier.js)
const Product = require('./models/product');
const Supplier = require('./models/supplier');

// Controladores (certifique-se de criar os arquivos de controladores, como productController.js)
const productController = require('./controllers/productController');
const supplierController = require('./controllers/supplierController');

// Middleware para o Express entender JSON no corpo da requisição
app.use(bodyParser.json());

// Testando a rota raiz
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

// **Rotas para Produto** (CRUD)
app.post('/products', productController.createProduct); // Cria um novo produto
app.get('/products', productController.getAllProducts); // Lista todos os produtos
app.get('/products/:id', productController.getProductById); // Busca produto por ID
app.put('/products/:id', productController.updateProduct); // Atualiza um produto
app.delete('/products/:id', productController.deleteProduct); // Deleta um produto

// **Rotas para Fornecedor** (CRUD)
app.post('/suppliers', supplierController.createSupplier); // Cria um novo fornecedor
app.get('/suppliers', supplierController.getAllSuppliers); // Lista todos os fornecedores
app.get('/suppliers/:id', supplierController.getSupplierById); // Busca fornecedor por ID
app.put('/suppliers/:id', supplierController.updateSupplier); // Atualiza um fornecedor
app.delete('/suppliers/:id', supplierController.deleteSupplier); // Deleta um fornecedor

// Sincronizando o banco de dados e iniciando o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000/`);
  });
});