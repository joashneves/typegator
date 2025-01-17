const Services = require("./Services.js");
const dataSource = require("../models");
const UsuariosServices = require("./UsuariosServices.js");
const { Op, Sequelize } = require("sequelize");

const usuariosServices = new UsuariosServices();
class LinkerServices extends Services {
  constructor() {
    super("Linker");
  }

  async procurarLinkParamentro(filtrotitulo) {
    try {
      const whereCondition = filtrotitulo
        ? { titulo: { [Sequelize.Op.like]: `%${filtrotitulo}%` } }
        : {};
  
      const linksFiltrados = await dataSource[this.model].findAll({
        where: whereCondition,
      });
      return linksFiltrados || []
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
      usuario_senha
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
  async atualizaRegistro({ usuario_usuario, usuario_senha, ...dadosAtualizados }, id) {
    try {
      // Verifica se o usuário existe e obtém seu ID
      const usuarioId = await usuariosServices.buscarPorDados(
        usuario_usuario,
        usuario_senha
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
        }
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
