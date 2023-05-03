const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION: SHUTTING DOWN SERVER");
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION: SHUTTING DOWN SERVER");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Middleware is a function that handles data between the request and response
// All the middleware is called a middleware stack and the order matters
// The request repsonse cycle starts with a request to the server, which is then handles by the middleware stack, and finally the server sends a response
