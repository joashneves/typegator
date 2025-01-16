const { Router } = require('express');
const LinkerController = require('../controllers/linkerController');
const { requiresAuth } = require('express-openid-connect');

const linkerController = new LinkerController();

const router = Router();

router.get('/link', (req, res) => linkerController.pegaTodos(req,res));
router.get('/link/:titulo', (req, res) => linkerController.listaPostagemPorParam(req,res));
router.post('/link', requiresAuth(), (req, res) => linkerController.criarPostagemLink(req, res))
router.put('/link/:id', (req, res) => linkerController.atualiza(req, res))
router.delete('/link/:id', requiresAuth(), (req, res) => linkerController.exclui(req,res));

module.exports = router;