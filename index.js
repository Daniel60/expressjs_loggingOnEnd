const express = require("express");
const { controlerGet } = require("./controler");
const { log, mwlog, myTime } = require("./logger");
const responseTime = require("response-time");
const app = express();
const port = 3000;

// Middleware function for logging
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
};
// Middleware function for catching errors
const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};

// Using the logger middleware for all routes
app.use(loggerMiddleware);

// Using the error handling middleware
app.use(errorHandlerMiddleware);
app.use(mwlog);
app.use(express.json());
app.use(log);
app.use(responseTime(myTime));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/controler", controlerGet);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
