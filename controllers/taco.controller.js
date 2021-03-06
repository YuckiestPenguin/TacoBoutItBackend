const Taco = require("../models/taco.model");
exports.findAll = (req, res) => {
  Taco.find()
    .then((tacos) => {
      res.send(tacos);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tacos.",
      });
    });
};

exports.create = (req, res) => {
  // Create a Taco
  const taco = new Taco({
    name: req.body.name || "Untitled Taco",
    imageUrl:
      req.body.imageUrl ||
      "https://images.pexels.com/photos/3434517/pexels-photo-3434517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: req.body.ingredients || [],
    proteins: req.body.proteins || [],
  });

  // Save Taco in the database
  taco
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a taco.",
      });
    });
};

exports.findOne = (req, res) => {
  Taco.findById(req.params.id)
    .then((taco) => {
      if (!taco) {
        return res.status(404).send({
          message: "Taco not found with id " + req.params.id,
        });
      }
      res.send(taco);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Taco not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving taco with id " + req.params.id,
      });
    });
};
