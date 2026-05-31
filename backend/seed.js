require("dotenv").config();
const mongoose = require("mongoose");

// connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// schema
const pizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
});

// model (THIS WAS MISSING IN YOUR ERROR)
const Pizza = mongoose.model("Pizza", pizzaSchema);

// seed data
const seedData = async () => {
  try {
    await Pizza.insertMany([
      {
        name: "Margherita",
        price: 199,
        category: "Veg",
        image: "/uploads/pizza3.jpg",
      },
      {
        name: "Pepperoni",
        price: 299,
        category: "Non-Veg",
        image: "/uploads/pizza4.jpg",
      },
      {
        name: "Veggie",
        price: 250,
        category: "Veg",
        image: "/uploads/pizza5.jpg",
      },
      {
        name: "Cheese Burst",
        price: 350,
        category: "Veg",
        image: "/uploads/pizza6.jpg",
      },
    ]);

    console.log("Data inserted successfully");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

seedData();