'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title:{
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
    descripcion: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        isAlpha: {
          args: true,
          msg: 'la descripcion solo debe tener letras'
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
    weeks:{
      allowNull:false,
      type:DataTypes.INTEGER,
        max:55, 
        min:3
  
    },
    enrrol:{
      type:DataTypes.INTEGER,
      allowNull:false,
      max: 5
    },
    minimun_skill:{
      allowNull:false,
      type:DataTypes.INTEGER,
    },
  },
  
  {
    sequelize,
    modelName: 'courses',
    timestamps:false

  });
  return Courses;
};