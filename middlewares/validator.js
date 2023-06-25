
const { body, validationResult } = require("express-validator");

const productsRules = [
  body("nom", "nom is required").notEmpty(),
  body("description", "description is required").notEmpty(),
  body("prix", "prix is required").notEmpty(),
  body("photos", "photoq is required").notEmpty(),
];

const registerRules = [
  body("prénom", "prénom is required").notEmpty(),
  body("nom", "nom is required").notEmpty(),
  body("adresse", "adresse is required").notEmpty(),
  body("ville", "ville is required").notEmpty(),
  body("NumeroDeTelephone", "NumeroDeTelephone is required").notEmpty(),
  body(
    "InformationComplemantaires",
    "InformationComplemantaires is required"
  ).notEmpty(),
  body("email", "enter a valid email").isEmail(),
  body("password", "password at least 6 caracters").isLength({ min: 6 }),
];

const loginRules = [
  body("email", "enter a valid email").isEmail(),
  body("password", "password at least 6 caracters").isLength({ min: 6 }),
];
const validator = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).send({ errors: error.array() });
  }
  next();
};

module.exports = { validator, productsRules, registerRules, loginRules };
