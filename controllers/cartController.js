
const Cart = require("../models/CartSchema");

async function addToCart(req, res) {
  const { utilisateur, produit } = req.body;

  try {
    const cartItem = new Cart({
      utilisateur,
      produit,
    });
    await cartItem.save();
    res.send(cartItem);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
}

async function getAllCartItems(req, res) {
  try {
    const cartItems = await Cart.find();
    res.status(200).send({ cartItems });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
}

module.exports = { addToCart, getAllCartItems };
