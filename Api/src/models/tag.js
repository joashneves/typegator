'use strict';
const {
  Model
} = require('sequelize');
const linker = require('./linker');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  tag.init({
    titulo: DataTypes.STRING,
    linker_id: {
          type: DataTypes.INTEGER,
          references: {
            model: linker,
            key: 'id',
          },
        }
  }, {
    sequelize,
    modelName: 'Tag',
    tableName: 'tags'
  });
  return tag;
};