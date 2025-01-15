const Controller = require('./controller.js')
const LinkerServices = require('../services/LinkerServices.js');

const linkerServices = new LinkerServices();

class LinkerController extends Controller{
    constructor(){
        super(linkerServices)
    }
}

module.exports = LinkerController;