const { Router } = require('express');
const TagController = require('../controllers/tagController.js');

const tagController = new TagController();

const router = Router();

router.get('/tag', (req, res) => tagController.pegaTodos(req, res))
router.post('/tag', (req, res) => tagController.criaNovo(req, res))

module.exports = router;