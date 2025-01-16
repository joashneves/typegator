const Services = require('./Services.js')
const dataSource = require('../models');

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

}

module.exports = UsuariosServices;