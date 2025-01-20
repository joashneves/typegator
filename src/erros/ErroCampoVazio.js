class ErroCampoVazio extends Error {
  constructor(messagem = "Informações faltando", status = 422) {
    super();
    this.message = messagem;
    this.status = status;
  }
  enviarResposta(res) {
    res.status(this.status).send({
      messagem: this.message,
      status: this.status,
    });
  }
}

module.exports = ErroCampoVazio;
