'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        isAlpha: {
          args: true,
          msg: 'el nombre debe tener solo letras'
        },
        notEmpty: {
          args: true,
          msg: 'el campo esta raro'
        },
        notNull:{
          args: true,
           msg: 'el campo no puede estar vacio'
        },
      }
    },
    
    email: DataTypes.STRING,
    password: {
      type:DataTypes.STRING,
      validate:{
        max: 10, 
        min:5
      }
    }
    
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};