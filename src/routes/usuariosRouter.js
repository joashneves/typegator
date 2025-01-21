const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController.js");
const autenticadoToken = require("../middlewares/autenticadoToken.js");
const router = Router();
const usuarioController = new UsuarioController();
const cors = require("cors");

router.get("/api/usuario/:id", cors(), (req, res) =>
  usuarioController.buscarPorId(req, res),
);
router.post("/api/usuario", cors(), (req, res) =>
  usuarioController.criarUsuario(req, res),
);
router.put("/api/usuario", cors(), autenticadoToken, (req, res) =>
  usuarioController.alterarSenha(req, res),
);
router.put("/api/login", cors(), (req, res) =>
  usuarioController.login(req, res),
);
module.exports = router;
