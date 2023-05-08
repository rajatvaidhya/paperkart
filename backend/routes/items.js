const express = require("express");
const router = express.Router();
const JWT_SEC = "enclave";
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Item = require("../models/Item");

router.get("/getitems", async (req, res) => {
  try {
    const products = await Item.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/addItem", async (req, res) => {
  try {
    const token = req.header("auth-token");

    if (!token) {
      return res.status(401).json({ error: "Authentication token not found" });
    }

    console.log(token);

    const decoded = jwt.verify(token, JWT_SEC);
    console.log(decoded);
    const userId = decoded._id;
    console.log(userId);

    const user = await User.findById(userId);
    console.log(user);
    user.cart.push(req.body.Itemkey);
    await user.save();

    res.status(200).json({ msg: "Successfully saved item" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/allCartItems", async (req, res) => {
  try {
    const token = req.header("auth-token");

    if (!token) {
      return res.status(401).json({ error: "Authentication token not found" });
    }

    console.log(token);

    const decoded = jwt.verify(token, JWT_SEC);
    console.log(decoded);
    const userId = decoded._id;
    console.log(userId);

    const user = await User.findById(userId);
    console.log(user);

    console.log(user.cart);

    const promises = user.cart.map(itemId => Item.findById(itemId));
    const cartProducts = await Promise.all(promises);

    res.json(cartProducts);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.delete("/removeItem/:itemId", async(req,res)=>{

  const token = req.header('auth-token');
    if (!token) {
      return res.status(401).json({ error: 'Authentication token not found' });
    }

    const decoded = jwt.verify(token, JWT_SEC);
    console.log(decoded);
    const userId = decoded._id;
    const user = await User.findById(userId);
    console.log(user);
    user.cart = user.cart.filter((itemId) => itemId.toString() !== req.params.itemId);
    await user.save();
    res.json({ message: 'Item removed from cart successfully' });
})


module.exports = router;