"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favoritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favoritos.init(
    {
      usuario_id: DataTypes.INTEGER,
      linker_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favoritos",
    },
  );
  return Favoritos;
};
