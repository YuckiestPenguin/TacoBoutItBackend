const { validate, ValidationError, Joi } = require("express-validation");

const tacoValidation = {
  body: Joi.object({
    name: Joi.string().required(),
  }),
};

module.exports = (app) => {
  const tacos = require("../controllers/taco.controller.js");

  app.get("/tacos", tacos.findAll);
  app.get("/tacos/:id", tacos.findOne);
  app.post("/tacos", validate(tacoValidation, {}, {}), tacos.create);
};
