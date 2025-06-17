'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Airport,{
        foreignKey : 'cityId',
        onDelete: 'CASCADE',
      })
    }
  }
  City.init({
    name:{
      type : DataTypes.TEXT,
      allowNull : false,
      unique: true,
      validate: {
      is: {
        args: /^[A-Za-z\s]+$/i,
        msg: 'City name must contain only alphabets and spaces'
      },
    }
    } 
    
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};