"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
      id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      summary: {
        type: Sequelize.TEXT,
      },
      color: {
        type: Sequelize.STRING,
      },
      startAt : {
        type : Sequelize.DATE
      },
      endAt : {
        type : Sequelize.DATE
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  },
};
