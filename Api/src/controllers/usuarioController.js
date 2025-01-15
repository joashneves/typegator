const Controller = require('./controller.js')
const UsuariosServices = require('../services/UsuariosServices.js');

const usuariosServices = new UsuariosServices();

class UsuarioController extends Controller{
    constructor(){
        super(usuariosServices)
    }
}

module.exports = UsuarioController;