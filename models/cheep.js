'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cheep extends Model {

    static associate(models) {
      this.User = this.belongsTo(models.Cheep, {
        foreignKey: 'username',
      })
    }
  };
  Cheep.init({
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cheep',
  });
  return Cheep;
};
