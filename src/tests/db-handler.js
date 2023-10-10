// db-handler.js
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongod;
let uri;

module.exports = {
  async connect() {
    if (!mongod) {
      mongod = await MongoMemoryServer.create();
      uri = mongod.getUri();
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  },

  async closeDatabase() {
    await mongoose.disconnect();
    if (mongod) {
      await mongod.stop();
    }
  },

  async clearDatabase() {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  },
};
