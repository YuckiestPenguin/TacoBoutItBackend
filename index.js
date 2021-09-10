const express = require("express");

const app = express();
const mongoose = require("mongoose");
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

require("./routes/taco.routes.js")(app);
app.listen(3000);
