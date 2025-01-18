require('dotenv').config();
const app = require('./src/app.js');
const manipulador404 = require('./src/middlewares/manipulador404.js');
const manipuladorDeErros = require('./src/middlewares/manipuladorDeErros.js')
const express = require('express');
const { auth } = require('express-openid-connect');
//JWT
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

function setCorsHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos
  next();
}
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/status', (req, res) => {
  if (req.oidc.isAuthenticated()) {
      res.send('Usuário autenticado');
  } else {
      res.send('Usuário não autenticado');
  }
});

app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
});

app.use(setCorsHeaders); // Adiciona os cabeçalhos CORS antes das rotas
app.use(express.json()); // Processa o JSON das requisições
const PORT = 3000;

app.use(manipuladorDeErros);
app.use(manipulador404);
app.listen(PORT, () => {
  console.log('servidor escutando!');
});

