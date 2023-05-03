const express = require("express");
const AppError = require("./utils/appError");
const morgan = require("morgan");
const globalErrorHandler = require("./controllers/errorController");
const keypressRouter = require("./routes/keypressRoutes.js");
const path = require("path");

const app = express();

// 1) Middlewares

// Logging Middleware
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "views")));
// app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/keypress", keypressRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} here!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
