const { Router } = require("express");
const TagController = require("../controllers/tagController.js");
const autenticadoToken = require("../middlewares/autenticadoToken.js");
const tagController = new TagController();
const cors = require("cors");
const router = Router();

router.get("/api/tag", cors(), (req, res) => tagController.pegaTodos(req, res));
router.post("/api/tag", cors(), autenticadoToken, (req, res) =>
  tagController.criaNovo(req, res),
);
router.put("/api/tag", cors(), autenticadoToken, (req, res) =>
  tagController.atualiza(req, res),
);
router.delete("/api/tag", cors(), autenticadoToken, (req, res) =>
  tagController.exclui(req, res),
);
module.exports = router;
