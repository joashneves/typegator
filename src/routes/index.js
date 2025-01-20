const express = require("express");
const usuario = require("./usuariosRouter.js");
const link = require("./linkerRouter.js");
const tag = require("./tagRouter.js");
const migration = require("./migrationsRouter.js");

module.exports = (app) => {
  app.use(express.json(), usuario, link, tag, migration);
};
