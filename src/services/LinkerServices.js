const Services = require("./Services.js");
const dataSource = require("../models/index.js");
const UsuariosServices = require("./UsuariosServices.js");
const { Op, Sequelize } = require("sequelize");

const usuariosServices = new UsuariosServices();
class LinkerServices extends Services {
  constructor() {
    super("Linker");
  }
  async procurarLinkPorUsuario(usuario) {
    try {
      const usuarioData = await usuariosServices.buscarPorNome(usuario);
      const whereCondition = { usuario_id: usuarioData.id };
      const linksFiltrados = await dataSource[this.model].findAll({
        where: whereCondition,
        order: [["createdAt", "DESC"]], // Ordena pela coluna 'createdAt' em ordem decrescente
      });
      return linksFiltrados || [];
    } catch (error) {
      console.error("Erro ao procurar link:", error.message);
      throw error;
    }
  }
  async procurarLinkParamentro(filtrotitulo) {
    try {
      const whereCondition = filtrotitulo
        ? { titulo: { [Sequelize.Op.like]: `%${filtrotitulo}%` } }
        : {};

      // Adiciona a ordenação pelo 'total_voto' em ordem decrescente
      const linksFiltrados = await dataSource[this.model].findAll({
        where: whereCondition,
        order: [
          ["total_voto", "DESC"], // Ordena pela coluna 'total_voto' em ordem decrescente
          ["createdAt", "DESC"], // Ordena pela coluna 'createdAt' em ordem decrescente
        ],
      });

      return linksFiltrados || [];
    } catch (error) {
      console.error("Erro ao procurar link:", error.message);
      throw error;
    }
  }
  async postarLink({
    usuario_usuario,
    usuario_senha,
    titulo,
    descricao,
    link,
  }) {
    const usuarioId = await usuariosServices.buscarPorDados(
      usuario_usuario,
      usuario_senha,
    );
    const linkPostagem = {
      usuario_id: usuarioId,
      titulo,
      descricao,
      link,
    };
    console.log(linkPostagem);
    return dataSource[this.model].create(linkPostagem);
  }
  async atualizaRegistro(
    { usuario_usuario, usuario_senha, ...dadosAtualizados },
    id,
  ) {
    try {
      // Verifica se o usuário existe e obtém seu ID
      const usuarioId = await usuariosServices.buscarPorDados(
        usuario_usuario,
        usuario_senha,
      );

      if (!usuarioId) {
        throw new Error("Usuário não encontrado ou credenciais inválidas.");
      }

      // Verifica se o registro pertence ao usuário
      const registro = await dataSource[this.model].findOne({
        where: {
          id: id,
          usuario_id: usuarioId,
        },
      });

      if (!registro) {
        throw new Error("Registro não encontrado ou não pertence ao usuário.");
      }
      // Atualiza o registro
      const [registrosAtualizados] = await dataSource[this.model].update(
        dadosAtualizados,
        {
          where: { id: id },
        },
      );

      // Verifica se a atualização ocorreu
      if (registrosAtualizados === 0) {
        return {
          sucesso: false,
          mensagem: "Não foi possível atualizar o registro.",
        };
      }

      return {
        sucesso: true,
        mensagem: "Registro atualizado com sucesso.",
      };
    } catch (error) {
      console.error("Erro ao atualizar registro:", error.message);
      throw error;
    }
  }
}

module.exports = LinkerServices;
