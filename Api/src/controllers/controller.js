
class Controller {
    constructor(entidadeServices) {
        this.entidadeServices = entidadeServices;
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeServices.pegaTodosOsRegistros()
            return res.status(200).json(listaDeRegistro);
        } catch (error) {
          return res.status(500).json({ erro: error.message });
        }
    }
    async criaNovo(req, res){
      const dadosCriado = req.body;
      try{
        const foiCriadoDados = await this.entidadeServices.criaRegistro(dadosCriado);
        return res.status(201).json({
          mensagem: `dados criados`,
          dadosCriado,
        })
      }catch(error){
        console.error(error)
        return res.status(500).json(
          { 'error': 'ocorreu um erro',
            messagem: error.messagem
          }
        );
      }
    }

    async atualiza(req, res){
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try{
            const foiAtualizado = await this.entidadeServices.atualizaRegistro(dadosAtualizados, Number(id));
            if(!foiAtualizado){
                return res.status(400).json({mensagem: `registro não foi atualizado`});
            }
            return res.status(200).json({mensagem: `Foi atualizado`})
        }catch(error){
            console.log(error);
            return res.status(500).json({ erro: error.message });
        }
    }

    async exclui(req, res) {
      const { id } = req.params;
      try {
        await this.entidadeServices.excluiRegistro(Number(id));
        return res.status(200).json({ mensagem: `id ${id} deletado` });
      } catch (erro) {
        return res.status(500).json({ erro: erro.message });
      }
    }

}

module.exports = Controller;