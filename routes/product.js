
const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getOneProductByName,
} = require("../controllers/ProductController");

router.post("/addproduct", addProduct);
router.get("/allproducts", getAllProducts);
router.delete("/deleteproduct/:productId", deleteProduct);
router.put("/updateproduct/:productId", updateProduct);
router.get("/getoneproduct", getOneProductByName);

module.exports = router;
