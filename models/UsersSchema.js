const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    prénom: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
    ville: {
      type: String,
      required: true,
    },
    NumeroDeTelephone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    motDePasse: {
      type: String,
      required: true,
    },
    InformationComplemantaires: {
      type: String,
      required: true,
    },
    photos: {
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("userCollection", UserSchema);
