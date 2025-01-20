const Controller = require("./controller.js");
const LinkerServices = require("../services/LinkerServices.js");
const UsuariosServices = require("../services/UsuariosServices.js");
const ServicesVotoDown = require("../services/ServicesVotoDown.js");
const ServicesVotoUp = require("../services/ServicesVotoUp.js");

const linkerServices = new LinkerServices();
const usuariosServices = new UsuariosServices();
const servicesVotoDown = new ServicesVotoDown();
const servicesVotoUp = new ServicesVotoUp();

class LinkerController extends Controller {
  constructor() {
    super(linkerServices);
  }
  async listaPostagemPorUsuario(req, res) {
    const usuarios = req.params.usuarios;
    try {
      const linksFiltrados =
        await linkerServices.procurarLinkPorUsuario(usuarios);
      return res.status(200).json(linksFiltrados);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: error.message });
    }
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

  async votoPositivo(req, res) {
    const id = req.params.id;
    const { usuario_usuario, usuario_senha } = req.body;
    try {
      // Autenticação do usuário
      const usuarioLogado = await usuariosServices.autenticadoUsuario(
        usuario_usuario,
        usuario_senha,
      );

      // Objeto de voto negativo
      const votoPositivo = {
        usuario_id: usuarioLogado.id,
        linker_id: id,
        voto: true,
      };

      // Verifica se o voto já existe
      const votoExistente = await servicesVotoUp.findOne({
        where: {
          usuario_id: votoPositivo.usuario_id,
          linker_id: votoPositivo.linker_id,
        },
      });

      if (votoExistente) {
        return res
          .status(400)
          .json({ mensagem: "Voto já registrado para este link." });
      }

      // Caso não exista, cria o novo voto
      const votoUp = await servicesVotoUp.create(votoPositivo);

      return res
        .status(201)
        .json({ mensagem: "Voto registrado com sucesso.", voto: votoUp });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: error.message });
    }
  }
  async votoNegativo(req, res) {
    const id = req.params.id;
    const { usuario_usuario, usuario_senha } = req.body;

    try {
      // Autenticação do usuário
      const usuarioLogado = await usuariosServices.autenticadoUsuario(
        usuario_usuario,
        usuario_senha,
      );

      // Objeto de voto negativo
      const votoNegativo = {
        usuario_id: usuarioLogado.id,
        linker_id: id,
        voto: true,
      };

      // Verifica se o voto já existe
      const votoExistente = await servicesVotoDown.findOne({
        where: {
          usuario_id: votoNegativo.usuario_id,
          linker_id: votoNegativo.linker_id,
        },
      });

      if (votoExistente) {
        return res
          .status(400)
          .json({ mensagem: "Voto já registrado para este link." });
      }

      // Caso não exista, cria o novo voto
      const votoDown = await servicesVotoDown.create(votoNegativo);

      return res
        .status(201)
        .json({ mensagem: "Voto registrado com sucesso.", voto: votoDown });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = LinkerController;
