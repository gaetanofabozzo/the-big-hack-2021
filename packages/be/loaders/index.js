const expressLoader = require("./http");

/**
 * Invoke all relevant loaders for application startup
 */
module.exports = async () => {
  await expressLoader();
  console.log("All Loaders run");
};
