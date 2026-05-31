const express = require("express");
const router = express.Router();

const Pizza = require("../models/Pizza");
const upload = require("../middleware/upload");

// CREATE PIZZA
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const pizza = new Pizza({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    await pizza.save();

    res.json(pizza);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET ALL PIZZAS
router.get("/", async (req, res) => {
  try {
    console.log("Collection:", Pizza.collection.name);

    const pizzas = await Pizza.find();

    console.log("Found:", pizzas.length);

    res.json(pizzas);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;