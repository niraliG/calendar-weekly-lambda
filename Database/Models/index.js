const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://nqqbmkhz:qWmuXYrXpt0XIRx0ap8N9TLd5hPgF_H2@arjuna.db.elephantsql.com/nqqbmkhz');

const Event = sequelize.define('events',  {
  id : {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  summary: {
    type: DataTypes.TEXT,
  },
  color: {
    type: DataTypes.STRING,
  },
  startAt : {
    type : DataTypes.DATE
  },
  endAt : {
    type : DataTypes.DATE
  },
},
{
  sequelize,
  modelName: "events",
  tableName: "events",
  timestamps : false
});

module.exports = {
  Event,
  sequelize,
};