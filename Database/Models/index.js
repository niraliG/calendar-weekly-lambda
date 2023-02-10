const { Sequelize, DataTypes } = require("sequelize");
let sequelize = null;
async function loadSequelize() {
  
  sequelize = new Sequelize(
    "postgres://nqqbmkhz:qWmuXYrXpt0XIRx0ap8N9TLd5hPgF_H2@arjuna.db.elephantsql.com/nqqbmkhz",
    { pool : { max: 2, min: 0, idle: 0, acquire: 3000 }}
  );

  await sequelize.authenticate();

  return sequelize;
}
async function loadModels() {
  if(!sequelize) await loadSequelize()
  const Event = sequelize.define(
    "events",
    {
      id: {
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
      startAt: {
        type: DataTypes.DATE,
      },
      endAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "events",
      tableName: "events",
      timestamps: false,
    }
  );
  return {Event}
}
const destroySequelize = async () => {
  if (!sequelize) {
    sequelize = await loadSequelize();
  } else {
    // restart connection pool to ensure connections are not re-used across invocations
    sequelize.connectionManager.initPools();

    // restore `getConnection()` if it has been overwritten by `close()`
    if (sequelize.connectionManager.hasOwnProperty("getConnection")) {
      delete sequelize.connectionManager.getConnection;
    }
  }
};

module.exports = {
  sequelize,
  destroySequelize,
  loadModels,
};
