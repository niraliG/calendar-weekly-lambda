"use strict";
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define(
    "events",
    {
      id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
        default : "new event"
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        default : "yellow"
      },
      startAt : {
        type : DataTypes.DATE,
        allowNull: false,
      },
      endAt : {
        type : DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "events",
      tableName: "events",
      timestamp : false
    }
  );
  return events;
};
