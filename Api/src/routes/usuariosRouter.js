const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();
const usuarioController = new UsuarioController();

router.get('/usuario', (req, res) => usuarioController.pegaTodos(req, res));
router.post('/usuario', (req, res) => usuarioController.criarUsuario(req, res))

module.exports = router;