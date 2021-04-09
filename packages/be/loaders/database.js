const Knex = require("knex");
const { Model, knexSnakeCaseMappers } = require("objection");
const knexConfig = require("../knexfile");

// Initialize knex.
const knex = Knex({
  ...knexConfig,
  ...knexSnakeCaseMappers(),
});

// Bind all Objection Models to the knex instance.
Model.knex(knex);

/**
 * Check database connection
 */
module.exports = async () => {
  try {
    await knex.raw("select 1+1 as result");
    console.debug("Succesfully conntected to the database");
  } catch (error) {
    console.error("Can't connect to the database", error);
    throw error;
  }

  // If the Node process is terminated, close the database connection
  process.on("SIGINT", () =>
    knex.destroy().then(() => console.info("Database disconnected"))
  );
};
