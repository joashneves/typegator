const Services = require("./Services.js");
const dataSource = require("../models/index.js");
class ServicesVotoDown extends Services {
  constructor() {
    super("Votos_down");
  }

  async procuraVotoExiste(usuario_id, linker_id) {
    const votoExistente = await dataSource[this.model].findOne({
      where: {
        usuario_id: usuario_id,
        linker_id: linker_id,
      },
    });
    return votoExistente;
  }
}

module.exports = ServicesVotoDown;
