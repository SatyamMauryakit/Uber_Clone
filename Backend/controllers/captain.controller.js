const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  try {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, fullname, password, vehicle } = req.body;

    // Check if captain already exists
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    // Handle fullname if it's a string instead of an object
    let firstname = "",
      lastname = "";
    if (typeof fullname === "string") {
      [firstname, lastname] = fullname.split(" ");
      lastname = lastname || ""; // In case only first name is provided
    } else {
      firstname = fullname.firstname;
      lastname = fullname.lastname;
    }

    // Hash password
    const hashedPassword = await captainService.hashPassword(password);

    // Create new captain
    const captain = await captainService.createCaptain({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      color: vehicle?.color || "",
      plate: vehicle?.plate || "",
      capacity: vehicle?.capacity || 0,
      vehicleType: vehicle?.vehicleType || "",
    });

    // Ensure token generation is correct
    const token = captain.generateToken ? captain.generateToken() : null;

    res.status(201).json({ captain, token });
  } catch (error) {
    next(error); // Pass error to Express error handler
  }
};
