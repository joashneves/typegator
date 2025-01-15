const { Router } = require('express');
const LinkerController = require('../controllers/linkerController');

const linkerController = new LinkerController();

const router = Router();

router.get('/link', (req, res) => linkerController.pegaTodos(req,res));

module.exports = router;