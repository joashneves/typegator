const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();
const usuarioController = new UsuarioController();

router.get('/usuarios', (req, res) => usuarioController.pegaTodos(req, res));

module.exports = router;