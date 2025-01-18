const { Router } = require('express');
const TagController = require('../controllers/tagController.js');
const autenticadoToken = require('../middlewares/autenticadoToken.js')
const tagController = new TagController();
const cors = require('cors')
const router = Router();

router.get('/tag', cors(),  (req, res) => tagController.pegaTodos(req, res));
router.post('/tag', cors(),  autenticadoToken, (req, res) => tagController.criaNovo(req, res));
router.put('/tag', cors(), autenticadoToken, (req, res) => tagController.atualiza(req,res));
router.delete('/tag', cors(), autenticadoToken, (req,res) => tagController.exclui(req,res));
module.exports = router;