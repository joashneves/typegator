const Services = require("./Services.js");
const dataSource = require("../models");
const UsuariosServices = require('./UsuariosServices.js')

const usuariosServices = new UsuariosServices();
class LinkerServices extends Services {
  constructor() {
    super("Linker");
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
