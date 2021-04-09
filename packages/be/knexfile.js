// Import knex configuration from config file
let { databaseConfig } = require("./config");

databaseConfig = {
  ...databaseConfig,
};

module.exports = databaseConfig;
