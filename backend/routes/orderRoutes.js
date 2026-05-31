const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const auth = require("../middleware/auth");

// CREATE ORDER
router.post("/", auth, async (req, res) => {
  try {
    const order = new Order({
      user: req.user,
      items: req.body.items,
      total: req.body.total,
      address: req.body.address,
    });

    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 👇 ADD THIS BELOW POST ROUTE
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user });
    res.json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;