'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        isAlpha: {
          args: true,
          msg: 'el titulo debe tener solo letras'
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
    text:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        isAlpha: {
          args: true,
          msg: 'el texto debe tener solo letras'
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
    rating:{
      allowNull:false,
      type:DataTypes.FLOAT,
      
    },
  }, {
    sequelize,
    modelName: 'reviews',
  });
  return reviews;
};