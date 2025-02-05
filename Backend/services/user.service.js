const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname = "",
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("All required fields must be provided");
  }

  // Check if the user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error(
      "Email is already registered. Please use a different email."
    );
  }

  // Create a new user
  const user = await userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};
