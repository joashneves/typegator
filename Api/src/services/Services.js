const dataSource = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listadeRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
            where: {
                id: id
            }
        });
        if(listadeRegistroAtualizado[0] === 0){
            return false;
        }
        return true;
    }
}

module.exports = Services;