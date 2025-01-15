const Services = require("../services/Services");

const Controller = require('./controller.js')

class UsuarioController extends Controller{
    constructor(){
        super(Services)
    }
}

module.exports = UsuarioController;