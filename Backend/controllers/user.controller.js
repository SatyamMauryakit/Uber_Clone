const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const BlacklistToken = require("../models/blacklistToken.model"); 

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);
  const { fullname, email, password } = req.body;

  let firstname = "";
  let lastname = "";

  if (typeof fullname === "object" && fullname.firstname) {
    firstname = fullname.firstname;
    lastname = fullname.lastname || "";
  } else if (typeof fullname === "string") {
    const nameParts = fullname.trim().split(" ");
    firstname = nameParts[0];
    lastname = nameParts.slice(1).join(" ") || "";
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    },
  });
};

module.exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports.logoutUser = async (req, res, next)=>{
  res.clrearCookie('token');

  const token =req.cookies.token|| req.headers.authorization.split("")[1];
  const blacklistToken = new BlacklistToken({token}); 
   res.status(200).json({message: 'Logout successful'});
}
