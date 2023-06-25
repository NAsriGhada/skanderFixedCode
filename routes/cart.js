const express = require("express");
const router = express.Router();
const { addToCart, getAllCartItems } = require("../controllers/cartController");

router.get("/addtocart", addToCart);
router.get("/getAllCartItems", getAllCartItems);

module.exports = router;
