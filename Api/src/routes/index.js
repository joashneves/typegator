const express = require("express");
const usuario = require('./usuariosRouter.js');

module.exports = app => {
    app.use(
        express.json(),
        usuario
    )
}