"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AirlineCompanies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AirlineCompanies.hasMany(models.Flights, {
        foreignKey: "airline_company_id",
      });
    }
  }
  AirlineCompanies.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      country: DataTypes.STRING,
      time_zone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AirlineCompanies",
    }
  );
  return AirlineCompanies;
};
