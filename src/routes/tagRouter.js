const { Router } = require('express');
const TagController = require('../controllers/tagController.js');
const autenticadoToken = require('../middlewares/autenticadoToken.js')
const tagController = new TagController();

const router = Router();

router.get('/tag', (req, res) => tagController.pegaTodos(req, res));
router.post('/tag', autenticadoToken, (req, res) => tagController.criaNovo(req, res));
router.put('/tag',autenticadoToken, (req, res) => tagController.atualiza(req,res));
router.delete('/tag',autenticadoToken, (req,res) => tagController.exclui(req,res));
module.exports = router;