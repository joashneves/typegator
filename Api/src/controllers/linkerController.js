const Controller = require('./controller.js')
const LinkerServices = require('../services/LinkerServices.js');

const linkerServices = new LinkerServices();

class LinkerController extends Controller{
    constructor(){
        super(linkerServices)
    }
    async criarPostagemLink (req, res){
      const dadosDoLink = req.body;
      try{
        const novoLink = await linkerServices.postarLink(dadosDoLink);
        return res.status(201).json({
          mensagem: `dados criados`,
          novoLink,
        })
      }catch(error){
        console.error(error)
      }
    }
}

module.exports = LinkerController;