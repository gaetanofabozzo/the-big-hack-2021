const shutdownServer = (err) => {
  console.info("Shutting down server...");

  if (err instanceof Error) {
    console.error(err.message, err.stack);
    process.exit(1);
  }
};

// Catch unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  // Log the promise that originated the rejection
  console.error(promise);
  // Throw unhandled promise rejection to the fallback handler below
  throw new Error(err);
});

// Catch uncaught Exception. Emit the SIGINT to gracefully shutdown the server.
process.on("uncaughtException", (err) => {
  console.error(err.message);
  process.emit("SIGINT");
});

// Handle the SIGINT for server shutdown
process.on("SIGINT", shutdownServer);

/**
 * Call all loaders for app bootstrap.
 */
async function startServer() {
  // eslint-disable-next-line global-require
  await require("./loaders")();
}

startServer();
