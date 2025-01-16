const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const { requiresAuth } = require('express-openid-connect');

const router = Router();
const usuarioController = new UsuarioController();

router.get('/usuario', requiresAuth(),(req, res) => usuarioController.pegaTodos(req, res));
router.post('/usuario', requiresAuth(), (req, res) => usuarioController.criarUsuario(req, res))

module.exports = router;