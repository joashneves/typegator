const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticadoToken = require('../middlewares/autenticadoToken.js')
const router = Router();
const usuarioController = new UsuarioController();

router.get('/usuario', autenticadoToken,(req, res) => usuarioController.pegaTodos(req, res));
router.post('/usuario', autenticadoToken, (req, res) => usuarioController.criarUsuario(req, res));
router.put('/usuario', autenticadoToken, (req, res) => usuarioController.atualizaUsuario(req, res))
router.put('/login', (req, res)=> usuarioController.login(req, res))
module.exports = router;