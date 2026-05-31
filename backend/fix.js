require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

const pizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

const removeUnsplash = async () => {
  try {
    await Pizza.deleteMany({
      image: { $regex: "unsplash" }
    });

    console.log("Unsplash images removed");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

removeUnsplash();