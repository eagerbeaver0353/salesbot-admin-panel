// src/app/services/productService.js
const productRepository = require("../repositories/productRepository");

class ProductService {
  async createProduct(productData) {
    return await productRepository.create(productData);
  }

  async getAllProducts() {
    return await productRepository.findAll();
  }
}

module.exports = new ProductService();
