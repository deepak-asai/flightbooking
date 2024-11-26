"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flights.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      airline_company_id: DataTypes.INTEGER,
      flight_number: DataTypes.STRING,
      source_airport_id: DataTypes.INTEGER,
      destination_airport_id: DataTypes.INTEGER,
      sceduled_departure_time: DataTypes.TIME,
      scheduled_arrival_time: DataTypes.TIME,
      frequency: DataTypes.STRING,
      economy_base_fare_adult: DataTypes.DECIMAL,
      economy_base_fare_child: DataTypes.DECIMAL,
      economy_base_fare_infant: DataTypes.DECIMAL,
      premium_economy_base_fare_adult: DataTypes.DECIMAL,
      premium_economy_base_fare_child: DataTypes.DECIMAL,
      premium_economy_base_fare_infant: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Flights",
    }
  );
  return Flights;
};
