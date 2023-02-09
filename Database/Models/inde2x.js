

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = {
  username: 'nqqbmkhz',
  password: 'qWmuXYrXpt0XIRx0ap8N9TLd5hPgF_H2',
  database: 'nqqbmkhz',
  host: 'postgres://nqqbmkhz:qWmuXYrXpt0XIRx0ap8N9TLd5hPgF_H2@arjuna.db.elephantsql.com/nqqbmkhz',
  // port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: false,
};
const db = {};
let sequelize;
  sequelize = new Sequelize('postgres://nqqbmkhz:qWmuXYrXpt0XIRx0ap8N9TLd5hPgF_H2@arjuna.db.elephantsql.com/nqqbmkhz')

fs.readdirSync(__dirname)
  .filter(file => (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  ))
  .forEach((file) => {
    console.log(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize)
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// relationships for models

//= ==============================
// Define all relationships here below
//= ==============================
// db.User.hasMany(db.Address);
// db.Address.belongsTo(db.User);

module.exports = db
