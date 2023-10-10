// tests/unit/repositories/productRepository.test.js
const ProductRepository = require("../../../src/app/repositories/productRepository");
const Product = require("../../../src/app/models/Product");
const dbHandler = require("../db-handler");

beforeAll(async () => await dbHandler.connect());
afterAll(async () => await dbHandler.closeDatabase());

describe("Product Repository", () => {
  it("should create a new product", async () => {
    const productData = { name: "Test Product", price: 10 };
    const createdProduct = await ProductRepository.create(productData);

    expect(createdProduct.name).toBe(productData.name);
    expect(createdProduct.price).toBe(productData.price);
  });

  it("should get all products", async () => {
    const productData = { name: "Test Product 2", price: 20 };
    await ProductRepository.create(productData);

    const products = await ProductRepository.findAll();

    expect(products.length).toBeGreaterThan(0);
  });
});
