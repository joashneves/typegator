'use strict';
const {
  Model
} = require('sequelize');
const Usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
  class Linker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Linker.init({
    usuario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: 'id',
      },
    },
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    link: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    }
  }, {
    sequelize,
    modelName: 'Linker',
    tableName: 'linkers',
    paranoid: true
  });
  return Linker;
};