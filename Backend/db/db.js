const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT); // No need for useNewUrlParser
    console.log("Connected to DB");
  } catch (err) {
    console.error("DB Connection Error:", err);
  }
}

module.exports = connectToDb;
