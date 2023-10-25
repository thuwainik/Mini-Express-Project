const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_DB_URL);
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB is Disconnected");
  }
};
module.exports = connectDB;
