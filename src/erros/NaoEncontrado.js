const ErroBase = require('./ErroBase')

class NaoEncontrado extends ErroBase {
  constructor(mensagem = "Não encontrada"){
    super(mensagem, 404);
  }

}

module.exports = NaoEncontrado