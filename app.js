const express = require('express');
const app = express();

// Importando rotas
const productRoutes = require('./src/routes/productRoutes');
const supplierRoutes = require('./src/routes/supplierRoutes');

// Middleware para processar requisições com JSON
app.use(express.json());

// Usando as rotas de produtos e fornecedores
app.use('/api', productRoutes);
app.use('/api', supplierRoutes);

// Inicializando o servidor e sincronizando o banco de dados
const sequelize = require('./src/database');
sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});