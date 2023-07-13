import {
  getDbName,
  getDbPort,
  getPassword,
  getServer,
  getUsername,
} from "../config";

const { Sequelize } = require("sequelize");

export const sequelizeConnection = new Sequelize(
  getDbName(),
  getUsername(),
  getPassword(),
  {
    dialect: "mysql",
    host: getServer(),
    port: getDbPort(),
  }
);

sequelizeConnection
  .authenticate()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error: any) => {
    console.error("Unable to connect to the database:", error);
  });
