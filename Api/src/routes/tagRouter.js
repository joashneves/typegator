const { Router } = require('express');
const TagController = require('../controllers/tagController.js');
const { requiresAuth } = require('express-openid-connect');

const tagController = new TagController();

const router = Router();

router.get('/tag', (req, res) => tagController.pegaTodos(req, res))
router.post('/tag', requiresAuth(), (req, res) => tagController.criaNovo(req, res))

module.exports = router;