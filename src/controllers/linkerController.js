const Controller = require("./controller.js");
const LinkerServices = require("../services/LinkerServices.js");

const linkerServices = new LinkerServices();

class LinkerController extends Controller {
  constructor() {
    super(linkerServices);
  }
  async listaPostagemPorParam(req, res) {
    const titulo = req.params.titulo;
    try {
      const linksFiltrados =
        await linkerServices.procurarLinkParamentro(titulo);
      return res.status(201).json(linksFiltrados);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: error.message });
    }
  }
  async criarPostagemLink(req, res) {
    const dadosDoLink = req.body;
    try {
      const novoLink = await linkerServices.postarLink(dadosDoLink);
      return res.status(201).json({
        mensagem: `dados criados`,
        novoLink,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: error.message });
    }
  }
  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeServices.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = LinkerController;
