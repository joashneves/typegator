const Services = require("./Services.js");
const dataSource = require('../models');
const UsuariosServices = require('./UsuariosServices.js')
const { Op } = require('sequelize');

const usuariosServices = new UsuariosServices();
class LinkerServices extends Services {
  constructor() {
    super("Linker");
  }
  
  async procurarLinkParamentro(filtrotitulo) {
    console.log(filtrotitulo);
    try {
      const linksFiltrados = await dataSource[this.model].findAll({
        where: {
          titulo: filtrotitulo,
        },
      });
  
      return {
        sucesso: linksFiltrados.length > 0,
        dados: linksFiltrados,
      };
    } catch (error) {
      console.error('Erro ao procurar link:', error.message);
      throw error;
    }
  }
  


  async postarLink({ usuario_usuario, usuario_senha, titulo, descricao, link }) {
    console.log({ usuario_usuario, usuario_senha, titulo, descricao, link })
    const usuarioId = await usuariosServices.buscarPorDados(usuario_usuario, usuario_senha);
    console.log(usuarioId);
    const linkPostagem = {
      usuario_id: usuarioId,
      titulo,
      descricao,
      link,
    };
    console.log(linkPostagem);
    return dataSource[this.model].create(linkPostagem);
  }
}

module.exports = LinkerServices;
