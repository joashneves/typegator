'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Votos_up extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Votos_up.init({
    usuario_id: DataTypes.INTEGER,
    linker_id: DataTypes.INTEGER,
    voto: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Votos_up',
  });
  return Votos_up;
};