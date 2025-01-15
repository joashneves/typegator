
class Controller {
    constructor(entidadeServices) {
        this.entidadeServices = entidadeServices;
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeServices.pegaTodosOsRegistros()
            return res.status(200).json(listaDeRegistro);
        } catch (erro) {
            //erro
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
        }catch(erro){
            console.log(erro);
        }
    }

}

module.exports = Controller;