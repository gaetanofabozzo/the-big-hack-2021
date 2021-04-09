const http = require("http");

const { app } = require("../api");

// Init http server for express
const port = 8081;
const host = "127.0.0.1";

const server = http.createServer(app);

module.exports = async () =>
  new Promise((resolve) => {
    server
      .listen(port, host, () => {
        console.info(`Server listening on ${host}:${port}`);

        process.on("SIGINT", () =>
          server.close(() => console.info("Server disconnected"))
        );

        resolve();
      })
      .on("error", (err) => {
        if (err.syscall !== "listen") {
          throw err;
        }

        switch (err.code) {
          case "EACCES":
            throw new Error("This process requires elevated privileges.");
          case "EADDRINUSE":
            throw new Error(`Port ${port} is already in use.`);
          default:
            throw err;
        }
      });
  });
