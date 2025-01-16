const { Router } = require('express');
const LinkerController = require('../controllers/linkerController');
const { requiresAuth } = require('express-openid-connect');

const linkerController = new LinkerController();

const router = Router();

router.get('/link', (req, res) => linkerController.pegaTodos(req,res));
router.post('/link', requiresAuth(), (req, res) => linkerController.criarPostagemLink(req, res))

module.exports = router;