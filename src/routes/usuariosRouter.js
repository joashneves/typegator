const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const autenticadoToken = require('../middlewares/autenticadoToken.js')
const router = Router();
const usuarioController = new UsuarioController();
const cors = require('cors')

router.get('/usuario', cors(), autenticadoToken,(req, res) => usuarioController.pegaTodos(req, res));
router.post('/usuario', cors(), (req, res) => usuarioController.criarUsuario(req, res));
router.put('/usuario',cors(), autenticadoToken, (req, res) => usuarioController.atualizaUsuario(req, res))
router.put('/login', cors(), (req, res)=> usuarioController.login(req, res))
module.exports = router;