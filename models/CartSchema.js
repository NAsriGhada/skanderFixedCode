
const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  utilisateur: {
    type: Schema.Types.ObjectId,
    ref: "utilisateur",
  },
  produit: {
    type: Schema.Types.ObjectId,
    ref: "products",
  },
});
module.exports = mongoose.model("Panier", CartSchema);
