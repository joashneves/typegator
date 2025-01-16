const { BaseError, ValidationError, DatabaseError } = require('sequelize');
const ErroBase = require('../erros/ErroBase.js');
const RequisicaoIncorreta = require('../erros/RequisicaoIncorreta.js');
const ErroValidacao = require('../erros/ErroValidacao.js');

function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof DatabaseError) {
    // Erros relacionados a consultas no banco de dados
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof ValidationError) {
    // Erros de validação do Sequelize
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof BaseError) {
    // Outros erros do Sequelize
    new ErroBase(erro).enviarResposta(res);
  } else {
    // Erros genéricos
    new ErroBase().enviarResposta(res);
  }
}

module.exports = manipuladorDeErros;
