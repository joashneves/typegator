const { Router } = require("express");
const LinkerController = require("../controllers/linkerController.js");
const autenticadoToken = require("../middlewares/autenticadoToken.js");
const linkerController = new LinkerController();
var cors = require("cors");

const router = Router();

router.get("/api/link", cors(), (req, res) =>
  linkerController.listarDezPostagem(req, res),
);
router.get(
  "/api/link/usuarios/:usuarios",
  autenticadoToken,
  cors(),
  (req, res) => linkerController.listaPostagemPorUsuario(req, res),
);
router.get("/api/link/:titulo", cors(), (req, res) =>
  linkerController.listaPostagemPorParam(req, res),
);
router.post("/api/link", cors(), autenticadoToken, (req, res) =>
  linkerController.criarPostagemLink(req, res),
);
router.put("/api/link/voteup/:id", cors(), autenticadoToken, (req, res) =>
  linkerController.votoPositivo(req, res),
);
router.put("/api/link/votedown/:id", cors(), autenticadoToken, (req, res) =>
  linkerController.votoNegativo(req, res),
);
router.put("/api/link/:id", cors(), autenticadoToken, (req, res) =>
  linkerController.atualiza(req, res),
);

module.exports = router;
