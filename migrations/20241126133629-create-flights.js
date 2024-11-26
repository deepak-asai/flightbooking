"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      airline_company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "AirlineCompanies",
        },
      },
      flight_number: {
        type: Sequelize.STRING,
      },
      source_airport_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "AirportCodes",
        },
      },
      destination_airport_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "AirportCodes",
        },
      },
      sceduled_departure_time: {
        type: Sequelize.TIME,
      },
      scheduled_arrival_time: {
        type: Sequelize.TIME,
      },
      frequency: {
        type: Sequelize.STRING,
      },
      economy_base_fare_adult: {
        type: Sequelize.DECIMAL,
      },
      economy_base_fare_child: {
        type: Sequelize.DECIMAL,
      },
      economy_base_fare_infant: {
        type: Sequelize.DECIMAL,
      },
      premium_economy_base_fare_adult: {
        type: Sequelize.DECIMAL,
      },
      premium_economy_base_fare_child: {
        type: Sequelize.DECIMAL,
      },
      premium_economy_base_fare_infant: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
