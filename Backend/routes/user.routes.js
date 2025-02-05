const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"), // Fixed typo
    body("fullname.lastname")
      .optional()
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters long"), // Added lastname validation
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"), // Improved message
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password not accepted"), // Fixed typo
  ],
  userController.loginUser
);

module.exports = router;
