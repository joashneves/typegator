const RequisicaoIncorreta = require("./RequisicaoIncorreta.js");

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagensErro = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; ");
    super(`Errors encontrados: ${mensagensErro}`);
  }
}

module.exports = ErroValidacao;
