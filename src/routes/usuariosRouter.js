const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const autenticadoToken = require('../middlewares/autenticadoToken.js')
const router = Router();
const usuarioController = new UsuarioController();

const corsOptions = {
  origin: '*'
};


router.get('/usuario', autenticadoToken,(req, res) => usuarioController.pegaTodos(req, res));
router.post('/usuario', (req, res) => usuarioController.criarUsuario(req, res));
router.put('/usuario',autenticadoToken, (req, res) => usuarioController.atualizaUsuario(req, res))
router.put('/login', (req, res)=> usuarioController.login(req, res))
module.exports = router;