"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AirportCodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // console.log("in associate");
      AirportCodes.hasMany(models.Flights, {
        as: "SourceAirport",
        foreignKey: "source_airport_id",
      });

      AirportCodes.hasMany(models.Flights, {
        as: "DestinationAirport",
        foreignKey: "destination_airport_id",
      });
    }
  }
  AirportCodes.init(
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
      modelName: "AirportCodes",
    }
  );
  return AirportCodes;
};
