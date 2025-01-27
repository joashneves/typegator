const dotenv = require("dotenv").config({ path: "./.env" });
const app = require("./src/app.js");
const manipulador404 = require("./src/middlewares/manipulador404.js");
const manipuladorDeErros = require("./src/middlewares/manipuladorDeErros.js");
const express = require("express");
const { auth } = require("express-openid-connect");
const path = require("path");

// Verifica se a pasta 'front/dist' existe antes de rodar o build
const buildDir = path.join(__dirname, "front", "dist");

// Configuração do JWT
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app.use(auth(config));

function setCorsHeaders(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permite qualquer origem
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  ); // Métodos permitidos
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Cabeçalhos permitidos
  next();
}

// Servindo arquivos estáticos da pasta 'front/dist'
app.use(express.static(buildDir));

// Rota para a raiz (/) que serve o index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(buildDir, "index.html"));
});

app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).end();
});

app.use(setCorsHeaders); // Adiciona os cabeçalhos CORS antes das rotas
app.use(express.json()); // Processa o JSON das requisições

const PORT = process.env.PORT || 3000;

app.use(manipuladorDeErros);
app.use(manipulador404);

// Iniciando o servidor e mostrando a URL
app.listen(PORT, () => {
  console.log(`Servidor escutando em http://localhost:${PORT}`);
});
