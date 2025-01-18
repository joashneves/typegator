const express = require('express');
const routes = require('./routes');
const app = express();

// Middleware para servir os arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'front', 'dist')));

// Rotas da API
routes(app);

// Middleware para lidar com rotas do frontend (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'dist', 'index.html'));
});

module.exports = app;