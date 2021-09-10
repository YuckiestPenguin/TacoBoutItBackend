module.exports = (app) => {
  const tacos = require("../controllers/taco.controller.js");

  app.get("/tacos", tacos.findAll);
  app.get("/tacos/:id", tacos.findOne);
  app.post("/tacos", tacos.create);
};
