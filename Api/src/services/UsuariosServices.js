const Services = require('./Services.js')
const dataSource = require('../models');
const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

class UsuariosServices extends Services{
    constructor(){
        super('Usuario')
    }

    async criarUsuario(dadosDoRegistro){
        const {nome, usuario, email, senha} = dadosDoRegistro;
        const senhaHash = senha.hashCode()
        const novosDados = {
            nome,
            usuario,
            email,
            senha: senhaHash
        }
        console.log(novosDados)

        return dataSource[this.model].create(novosDados)
    }


    async buscarPorDados(usuario_usuario, usuario_senha){
      const senhaHash = usuario_senha.hashCode();
      console.log(senhaHash)
      const filtradoUser = await dataSource[this.model].findOne({
          where: { 
              usuario: usuario_usuario, 
              senha: senhaHash 
          }
      });
      console.log(`${filtradoUser}`)
      if (!filtradoUser) {
          throw new Error("Usuário não encontrado ou senha incorreta");
      }
  
      console.log(`usuario encontrado : ${filtradoUser.id}`);
      return filtradoUser.id;
    }

}

module.exports = UsuariosServices;