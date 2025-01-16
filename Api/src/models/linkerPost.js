'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LinkerPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  LinkerPost.init({
    usuario_usuario: DataTypes.STRING,
    usuario_senha: DataTypes.STRING,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    link: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    }
  }, {
    sequelize
  });
  return LinkerPost;
};