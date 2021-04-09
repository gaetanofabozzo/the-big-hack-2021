const config = require("config");

// Get the environment
const environment = process.env.NODE_ENV || "development";
const isDevelopment = environment === "development";

const databaseConfig = config.get("Database");

module.exports = {
  databaseConfig,
  environment,
  isDevelopment,
};
