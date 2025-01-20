const { exec } = require("child_process");

class MigrationsServices {
  async runMigrations() {
    return new Promise((resolve, reject) => {
      exec("npx sequelize-cli db:migrate", (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao executar migrações: ${error.message}`);
          return reject(new Error("Erro ao executar migrações."));
        }
        if (stderr) {
          console.error(`Erro nas migrações: ${stderr}`);
          return reject(new Error("Erro nas migrações."));
        }
        console.log(`Migrações executadas com sucesso: ${stdout}`);
        resolve(stdout);
      });
    });
  }
}

module.exports = MigrationsServices;
