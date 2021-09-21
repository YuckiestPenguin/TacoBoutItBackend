const express = require("express");
const { validate, ValidationError, Joi } = require("express-validation");
const app = express();
const mongoose = require("mongoose");
const jwt = require("./_helpers/jwt");
const errorHandler = require("./_helpers/error-handler");
require("dotenv").config();

app.use(express.json());
const mongoDbUrl = process.env.DB_URL;
mongoose.connect(mongoDbUrl);

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoDbUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use(jwt());

require("./routes/taco.routes.js")(app);
app.use("/users", require("./users/users.controller"));

// global error handler
app.use(errorHandler);
app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});

app.listen(process.env.PORT || 5000);
