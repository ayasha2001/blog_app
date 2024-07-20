const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = connectDB;
