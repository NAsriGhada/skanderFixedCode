
const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductsSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  photos: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductsSchema);
