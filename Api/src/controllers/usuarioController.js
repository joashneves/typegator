const Controller = require('./controller.js')
const UsuariosServices = require('../services/UsuariosServices.js');

const usuariosServices = new UsuariosServices();

class UsuarioController extends Controller{
    constructor(){
        super(usuariosServices)
    }

    async criarUsuario(req, res){
        const dadosUsuario = req.body;
        try{
            const usuarioLogado = req.oidc.user;
            const novoUsuario = await usuariosServices.criarUsuario(dadosUsuario)
            return res.status(201).json({
                mensagem: `dados criados`,
                novoUsuario,
                auth0Id: req.oidc.user.sub,
              })
        }
        catch(error){
            console.error(error)
            return res.status(500).json(
                { 'error': 'ocorreu um erro',
                    messagem: error.type
                }
              );
        }

    }
}

module.exports = UsuarioController;