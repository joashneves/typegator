const express = require("express");
const MigrationsController = require("../controllers/migrationsController.js");

const migrationsController = new MigrationsController();
const router = express.Router();

// Endpoint para executar as migrações
router.get("/api/migrations", (req, res) => migrationsController.runMigrations(req, res));

module.exports = router;
