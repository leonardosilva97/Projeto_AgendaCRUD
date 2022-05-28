'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    email: DataTypes.STRING(80),
    salario: DataTypes.DECIMAL(10,2)
    
  }, {
    sequelize,
    modelName: 'Pessoa',
  });
  return Pessoa;
};