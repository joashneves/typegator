"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Usuario.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate:{
          is: {
            args: /^[^0-9]*$/, // Regex que impede números
            msg: "O nome não pode conter números.",
          },
        },
      },
      usuario: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [4, 20], 
          is: /^\S*$/, 
        },
      },
      descricao: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        validator: {
          isEmail: true,
        },
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuarios",
      paranoid: true,
    },
  );
  return Usuario;
};
