"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Votos_down extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Votos_down.init(
    {
      usuario_id: DataTypes.INTEGER,
      linker_id: DataTypes.INTEGER,
      voto: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Votos_down",
      tableName: "votos_downs",
    },
  );
  return Votos_down;
};
