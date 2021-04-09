const geoRoutes = require("../../modules/geo/routes");

/**
 * Register routes on express app.
 *
 * @param {Express} app The express app.
 */
module.exports.registerAPIRoutes = (app) => {
  app.use("/api/geo", geoRoutes);
};
