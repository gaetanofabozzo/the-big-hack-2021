const express = require("express");
// Add promise support to express router
// This needs to be removed when express 5.0 is out
require("express-async-errors");

const app = express();

const boolParser = require("express-query-boolean");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const expressLocale = require("express-locale");
const cors = require("cors");

const { registerAPIRoutes } = require("./routes");

// Setup Express
// Setup middleware
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(boolParser());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
    credentials: true,
    exposedHeaders: "Authorization",
  })
);

// Ignore browser-related requests
// Load locale from requests
app.use(expressLocale());

// Register routes
registerAPIRoutes(app);

// If no one of the routes above is matched a 404 Error is created
// and passed to the global error handler
app.use((req, res, next) => {
  console.warn(`No matching route for ${req.originalUrl}`);
  next(new Error("Service not found"));
});

module.exports = { app };
