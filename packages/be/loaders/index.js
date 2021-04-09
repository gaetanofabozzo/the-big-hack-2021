const dbLoader = require("./database");
const expressLoader = require("./http");

/**
 * Invoke all relevant loaders for application startup
 */
module.exports = async () => {
  await dbLoader();
  await expressLoader();
  console.debug("All Loaders run");
};
