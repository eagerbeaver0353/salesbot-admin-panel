// src/app/controllers/productController.js
const productService = require("../services/productService");

class ProductController {
  async createProduct(req, res) {
    try {
      const productData = req.body;
      const product = await productService.createProduct(productData);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();
