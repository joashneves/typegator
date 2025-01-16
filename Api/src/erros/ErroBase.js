class ErroBase extends Error{
  constructor(messagem = "Error interno do servidor", status = 500){
    super();
    this.message = messagem;
    this.status = status;
  }
  enviarResposta(res){
    res.status(this.status).send({
      messagem: this.message,
      status: this.status
    })
  }
}

emodule.exports = ErroBase;