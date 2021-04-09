const geoRoutes = require("../../modules/geo/routes");
const vaccinesRoutes = require("../../modules/vaccines/routes");

/**
 * Register routes on express app.
 *
 * @param {Express} app The express app.
 */
module.exports.registerAPIRoutes = (app) => {
  app.use("/api/geo", geoRoutes);
  app.use("/api/vaccines", vaccinesRoutes);
};
