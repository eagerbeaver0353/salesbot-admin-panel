// tests/unit/services/productService.test.js
const productService = require("../../../src/app/services/productService");
const Product = require("../../../src/app/models/Product");
const mongoose = require("mongoose");
const dbHandler = require("../db-handler");

beforeAll(async () => await dbHandler.connect());
afterAll(async () => await dbHandler.closeDatabase());

describe("Product Service", () => {
  it("should create a new product", async () => {
    const productData = { name: "Test Product", price: 10 };
    const createdProduct = await productService.createProduct(productData);

    expect(createdProduct.name).toBe(productData.name);
    expect(createdProduct.price).toBe(productData.price);
  });

  it("should get all products", async () => {
    const productData = { name: "Test Product 2", price: 20 };
    await productService.createProduct(productData);

    const products = await productService.getAllProducts();

    expect(products.length).toBeGreaterThan(0);
  });
});
