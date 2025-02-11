const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname").custom((value) => {
      if (!value || typeof value !== "object" || Object.keys(value).length === 0) {
        throw new Error("Fullname must be a non-empty object");
      }
      if (!value.firstname || value.firstname.trim().length < 3) {
        throw new Error("First name must be at least 3 characters long");
      }
      if (value.lastname && value.lastname.trim().length < 3) {
        throw new Error("Last name must be at least 3 characters long");
      }
      return true;
    }),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  ],
  userController.loginUser
);

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

module.exports = router;
