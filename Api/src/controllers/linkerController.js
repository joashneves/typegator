const Controller = require('./controller.js')
const LinkerServices = require('../services/LinkerServices.js');

const linkerServices = new LinkerServices();

class LinkerController extends Controller{
    constructor(){
        super(linkerServices)
    }
    async listaPostagemPorParam(req, res){
      const titulo = req.params.titulo;
      console.log(titulo)
      try{
       const linksFiltrados = await linkerServices.procurarLinkParamentro(titulo)
       return res.status(201).json({
        mensagem: `dados Encontrados`,
        linksFiltrados,
      })
      }catch(error){
        console.error(error)
      }
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