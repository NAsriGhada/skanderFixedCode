
const Product = require("../models/ProductSchema");

async function addProduct(req, res) {
  const { nom, description, photos, prix } = req.body;
  try {
    const product = new Product({
      nom,
      description,
      prix,
      photos,
    });
    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
}
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).send({ products });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
}
2;

async function deleteProduct(req, res) {
  const { productId } = req.params;
  try {
    await Product.findByIdAndDelete(productId);
    res.send("product deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
}

async function updateProduct(req, res) {
  const { productId } = req.params;
  try {
    await Product.findByIdAndUpdate(productId, { $set: { ...req.body } });
    res.send("product update");
  } catch (error) {
    console.log(error);
    res.send("error");
  }
}

async function getOneProductByName(req, res) {
  const { nom } = req.body;
  try {
    const product = await Product.findOne({ nom });
    res.send(product);
  } catch (error) {
    console.log(error);
    res.send("server err");
  }
}

module.exports = {
  addProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getOneProductByName,
};
