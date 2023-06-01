const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "users",
  "postgres",
  "root",
  {
    host: 'localhost',
    dialect: "postgres",
  }
);

module.exports = sequelize;
