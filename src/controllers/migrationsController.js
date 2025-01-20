const Controller = require("./controller.js");
const MigrationsServices = require("../services/MigrationsServices.js");

const migrationsServices = new MigrationsServices();

class MigrationsController extends Controller {
  constructor() {
    super(migrationsServices);
  }

  async runMigrations(req, res) {
    try {
      const result = await migrationsServices.runMigrations();
      res
        .status(200)
        .json({
          mensagem: "Migrações executadas com sucesso.",
          detalhes: result,
        });
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .json({ mensagem: "Erro ao executar migrações.", erro: error.message });
    }
  }
}

module.exports = MigrationsController;
