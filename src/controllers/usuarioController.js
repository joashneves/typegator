const Controller = require("./controller.js");
const UsuariosServices = require("../services/UsuariosServices.js");
const jwt = require("jsonwebtoken");

const usuariosServices = new UsuariosServices();

class UsuarioController extends Controller {
  constructor() {
    super(usuariosServices);
  }
  async buscarPorId(req, res) {
    const id = req.params.id;
    try {
      const { usuario } = await usuariosServices.pegaRegistroPorId(id);
      return res.status(200).json({ usuario });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Ocorreu um erro.",
        mensagem: error.message,
      });
    }
  }
  async criarUsuario(req, res) {
    const dadosUsuario = req.body;
    try {
      // Verifica se já existe um usuário com o mesmo nome
      console.log(dadosUsuario);
      const usuarioExistente = await usuariosServices.buscarPorNome(
        dadosUsuario.usuario,
      );

      if (usuarioExistente) {
        // Se o usuário já existir, retorna um erro
        return res.status(400).json({
          error: "Já existe um usuário com esse nome.",
        });
      }

      // Se não existir, cria o novo usuário
      const novoUsuario = await usuariosServices.criarUsuario(dadosUsuario);
      return res.status(201).json({
        mensagem: "Usuário criado com sucesso.",
        novoUsuario,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Ocorreu um erro.",
        mensagem: error.message,
      });
    }
  }
  async alterarSenha(req, res) {
    const { usuario_usuario, usuario_senha, usuario_senhaNova } = req.body;
    try {
      const usuarioLogado = await usuariosServices.autenticadoUsuario(
        usuario_usuario,
        usuario_senha,
      );
      const usuarioSenhanova = {
        nome: usuarioLogado.nome,
        usuario: usuarioLogado.usuario,
        email: usuarioLogado.email,
        senha: usuario_senhaNova,
      };
      const usuarioTrocado = await usuariosServices.atualizaRegistro(
        usuarioSenhanova,
        usuarioLogado.id,
      );
      return res.status(201).json({
        mensagem: "Usuário atualizado com sucesso.",
        usuarioTrocado,
      });
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error.message);
      return res.status(500).json({
        error: "Ocorreu um erro ao realizar login.",
        mensagem: error.message,
      });
    }
  }
  async login(req, res) {
    const { usuario_usuario, usuario_senha } = req.body;

    try {
      const usuarioLogado = await usuariosServices.autenticadoUsuario(
        usuario_usuario,
        usuario_senha,
      );

      if (!usuarioLogado) {
        return res.status(401).json({ error: "Credenciais inválidas." });
      }

      const token = jwt.sign(
        { id: usuarioLogado.id, usuario: usuarioLogado.usuario },
        process.env.SECRET,
        { expiresIn: "24h" }, // Token expira em 1 hora
      );

      return res.status(200).json({ usuarioLogado, token });
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error.message);
      return res.status(500).json({
        error: "Ocorreu um erro ao realizar login.",
        mensagem: error.message,
      });
    }
  }
}

module.exports = UsuarioController;
