const mongoose = require("mongoose");

const TacoSchema = mongoose.Schema(
  {
    name: String,
    id: String,
    imageUrl: String,
    ingredients: Array,
    proteins: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Taco", TacoSchema);
