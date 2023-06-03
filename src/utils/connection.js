const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(
//   "users_sfme",
//   "users_sfme_user",
//   "6rSHo6weWthxxSGd4wC1i4uB54k7Ci7E",
//   {
//     host: 'dpg-chser9orddl1j5vjreeg-a',
//     dialect: "postgres",
//   }
// );

const sequelize = new Sequelize(process.env.DATABASE_URL, {dialect: 'postgres'})

module.exports = sequelize;
