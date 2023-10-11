// src/app/repositories/productRepository.js
const Product = require("../models/Product");

class ProductRepository {
  async create(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async findAll() {
    return await Product.find();
  }
}

module.exports = new ProductRepository();
