require("dotenv").config();

const express = require("express");
const cors = require("cors");

const pizzaRoutes = require("./routes/pizzaRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

const connectDB = require("./config/db");

const app = express();

// DB Connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Static Folder
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pizzas", pizzaRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Pizza API Running...");
});