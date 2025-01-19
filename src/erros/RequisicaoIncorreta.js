const ErroBase = require("./ErroBase.js");

class RequisicaoIncorreta extends ErroBase {
  constructor(mensagem = "um ou mais dados fornecidos estão icorretos") {
    super(mensagem, 400);
  }
}

module.exports = RequisicaoIncorreta;
