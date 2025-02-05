const userModel = require("../models/user.model");
const userService = require("../services/user.service"); // Fixed spelling
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req); // Changed 'error' to 'errors'
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // Fixed incorrect variable
  }

  console.log(req.body);
  const { fullname, email, password } = req.body;

  // Check if fullname is an object or a string
  let firstname = "";
  let lastname = "";
  if (typeof fullname === "object" && fullname.firstname && fullname.lastname) {
    firstname = fullname.firstname;
    lastname = fullname.lastname;
  } else if (typeof fullname === "string") {
    [firstname, lastname] = fullname.split(" ");
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    // Fixed spelling of userService
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

module.exports.loginUser= async(req, res,next)=>{

  const errors =validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }

  const {email,password}=req.body;
  const user= await userModel.findOne({email}).select('+password');
  if(!user){
    return res.status(401).json({message: 'Invalid email or Password'});
  }
  const isMatch = await user.comparePassword(password);
  if(!isMatch){
    return res.status(401).json({message :'Invalid email or password'});
  }
  const token = user.generateAuthToken();
  res.status(200).json({token,user});
}
