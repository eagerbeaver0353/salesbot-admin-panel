// index.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productController = require("./src/app/controllers/productController");

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/admin_panel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Database connection error:", error);
});

db.once("open", () => {
  console.log("Connected to the database");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/products", (req, res) => {
  try {
    // Log request data
    console.log("Received POST request to create a product");

    // Call the controller method to create a product
    productController.createProduct(req, res);
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/products", (req, res) => {
  try {
    // Log request data
    console.log("Received GET request to retrieve all products");

    // Call the controller method to retrieve all products
    productController.getAllProducts(req, res);
  } catch (error) {
    console.error("Error handling GET request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
