const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();
const usuarioController = new UsuarioController();

router.get('/usuarios', (req, res) => res.status(200).json({
    usuario: 'Usuarios'
}));

module.exports = router;