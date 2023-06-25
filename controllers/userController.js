
const user = require("../models/UsersSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const {
      nom,
      prénom,
      adresse,
      ville,
      NumeroDeTelephone,
      email,
      motDePasse,
      role,
    } = req.body;
    const isfound = await user.findOne({ email });
    if (isfound) {
      return res.status(400).json({ message: "user already exists!" });
    }

    const salt = bcrypt.getSaltSync(10);
    const hashedPassword = await bcrypt.hash(motDePasse, salt);

    const newUser = await user.create({
      nom,
      prénom,
      adresse,
      ville,
      NumeroDeTelephone,
      email,
      motDePasse: hashedPassword,
      role,
    });

    if (newUser) {
      res.status(200).json({
        id: newUser._id,
        prénom: newUser.prénom,
        nom: newUser.nom,
        adresse: newUser.adresse,
        ville: newUser.ville,
        NumeroDeTelephone: newUser.NumeroDeTelephone,
        email: newUser.email,
        role: newUser.role,
        token: generateToken(newUser._id),
      });
    } else {
      res.status(400);
      console.log("invalid user data");
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Error occurred.", error });
    console.log("invalid");
  }
};

const Login = async (req, res) => {
  try {
    const { email, motDePasse } = req.body;
    const isfound = await user.findOne({ email });
    if (isfound && (await bcrypt.compare(motDePasse, isfound.motDePasse))) {
      res.json({
        _id: isfound._id,
        nom: isfound.nom,
        prénom: isfound.prénom,
        email: isfound.email,
        role: isfound.role,
        token: generateToken(isfound._id),
      });
    } else {
      res.status(400);
      console.log("Invalid credentials");
    }
  } catch (error) {
    res.status(501).json({ message: error });
  }
};

const getCurrent = async (req, res) => {
  res.status(200).json(req.user);
};
// console.log("users profile", getMe);

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "30d",
  });
};
console.log(generateToken());
//check this
const getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.send({ users });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const logout = (req, res) => {
  // Clear session data
  req.session.destroy();

  res.status(200).json({ message: "Logged out successfully" });
};

const userUpdated = async (req, res) => {
  try {
    const { nom, prénom, adresse, ville, NumeroDeTelephone, email } = req.body;
    const userId = req.user.id;

    const updatedUser = await user.findByIdAndUpdate(
      userId,
      { nom, prénom, adresse, ville, NumeroDeTelephone, email },
      { new: true }
    );

    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const deletedUser = async (req, res) => {
  const { userId } = req.params;
  try {
    await user.findByIdAndDelete(userId);
    res.send("User deleted");
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// const
module.exports = {
  register,
  Login,
  getCurrent,
  getAllUsers,
  userUpdated,
  deletedUser,
  logout,
};
