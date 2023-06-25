
const express = require("express");
const router = express.Router();
const {
  register,
  Login,
  getCurrent,
  userUpdated,
  deletedUser,
  getAllUsers,
  logout,
} = require("../controllers/userController");

//last thing to add in my pers
const {
  validator,
  registerRules,
  loginRules,
} = require("../middlewares/validator");
const {protect} = require("../middlewares/Auth");


router.post("/register", register, validator, registerRules);
router.post("/login", Login, validator, loginRules);
router.post("/logout", logout);
router.get("/me", protect, getCurrent);

router.get("/allusers", protect, getAllUsers);
router.post("/updateuser", userUpdated);
router.delete("/deleteuser/:userId", protect, deletedUser);

module.exports = router;