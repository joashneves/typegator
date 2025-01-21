"use strict";
const { Model } = require("sequelize");
const Usuario = require("./usuario");
module.exports = (sequelize, DataTypes) => {
  class Linker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Linker.init(
    {
      usuario_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Usuario,
          key: "id",
        },
      },
      titulo: {
        type: DataTypes.STRING,
        validate:{
          len: [3,40],
        },
      },
      descricao: {
        type: DataTypes.STRING,
        validate:{
          len: [3,128],
        },
      },
      link: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isUrl: true,
        },
      },
      voto_up: DataTypes.INTEGER,
      voto_down: DataTypes.INTEGER,
      total_voto: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Linker",
      tableName: "linkers",
      paranoid: true,
    },
  );
  return Linker;
};
