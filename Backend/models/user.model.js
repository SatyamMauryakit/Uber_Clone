const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters long"], // Fixed spelling
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true, // Ensuring email is required
    unique: true,
    minlength: [3, "Email must be at least 3 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false, // Password should not be returned in queries
  },
  socketId: {
    type: String,
  },
});

// Generate JWT Token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expiration time (optional but recommended)
  });
  return token;
};

// Compare Password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Hash Password
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("User", userSchema); // Capitalized model name (common convention)
module.exports = userModel;
