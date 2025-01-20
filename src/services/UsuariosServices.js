const Services = require("./Services.js");
const dataSource = require("../models/index.js");
const jwt = require("jsonwebtoken");
const token = jwt.sign({ foo: "bar" }, "shhhhh");

String.prototype.hashCode = function () {
  var hash = 0,
    i,
    chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

class UsuariosServices extends Services {
  constructor() {
    super("Usuario");
  }

  async buscarPorNome(usuario_usuario) {
    try {
      const usuario = await dataSource.Usuario.findOne({
        where: { usuario: usuario_usuario },
      });
      return usuario; // Se encontrar, retorna o usuário; se não, retorna null.
    } catch (error) {
      throw new Error("Erro ao buscar o usuário");
    }
  }
  async buscarPorDados(usuario_usuario, usuario_senha) {
    if (usuario_usuario === undefined || usuario_senha === undefined) {
      throw new Error("Favor fornecer paramentros");
    }
    const senhaHash = usuario_senha.hashCode();
    console.log(senhaHash);
    const filtradoUser = await dataSource[this.model].findOne({
      where: {
        usuario: usuario_usuario,
        senha: senhaHash,
      },
    });
    console.log(`${filtradoUser}`);
    if (!filtradoUser) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    console.log(`usuario encontrado : ${filtradoUser.id}`);
    return filtradoUser.id;
  }
  async autenticadoUsuario(usuario_usuario, usuario_senha) {
    if (usuario_usuario === undefined || usuario_senha === undefined) {
      throw new Error("Favor fornecer paramentros");
    }
    const senhaHash = usuario_senha.hashCode();
    console.log(senhaHash);
    const filtradoUser = await dataSource[this.model].findOne({
      where: {
        usuario: usuario_usuario,
        senha: senhaHash,
      },
    });
    console.log(`${filtradoUser}`);
    if (!filtradoUser) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    console.log(`usuario encontrado : ${filtradoUser.id}`);
    return filtradoUser;
  }
  async criarUsuario(dadosDoRegistro) {
    const { nome, usuario, email, senha } = dadosDoRegistro;
    if (!nome || !usuario || !email || !senha) {
      throw new Error(
        "Todos os campos ('nome', 'usuario', 'email', 'senha') são obrigatórios.",
      );
    }
    const senhaHash = senha.hashCode();
    const novosDados = {
      nome,
      usuario,
      email,
      senha: senhaHash,
    };
    console.log(novosDados);

    return dataSource[this.model].create(novosDados);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const senhaHash = dadosAtualizados.senha.hashCode();
    const novosDados = {
      nome: dadosAtualizados.nome,
      usuario: dadosAtualizados.usuario,
      email: dadosAtualizados.email,
      senha: senhaHash,
    };
    const listadeRegistroAtualizado = dataSource[this.model].update(
      novosDados,
      {
        where: {
          id: id,
        },
      },
    );
    if (listadeRegistroAtualizado[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = UsuariosServices;
