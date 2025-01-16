const { Router } = require('express');
const LinkerController = require('../controllers/linkerController');
const autenticadoToken = require('../middlewares/autenticadoToken.js')

const linkerController = new LinkerController();

const router = Router();

router.get('/link', (req, res) => linkerController.pegaTodos(req,res));
router.get('/link/:titulo', (req, res) => linkerController.listaPostagemPorParam(req,res));
router.post('/link', autenticadoToken, (req, res) => linkerController.criarPostagemLink(req, res))
router.put('/link/:id', autenticadoToken, (req, res) => linkerController.atualiza(req, res))
router.delete('/link/:id', autenticadoToken, (req, res) => linkerController.exclui(req,res));

module.exports = router;