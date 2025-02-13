const { model } = require("mongoose");
const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  email,
  firstname,
  lastname,
  password,
  color,
  plate,
  capcity,
  vehicleType,
}) => {
  if (
    !email ||
    !firstname ||
    !password ||
    !color ||
    !plate ||
    !capcity ||
    !vehicleType
  ) {
    throw new Error("Missing fields");
  }
  const captain = captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capcity,
      vehicleType,
    },
  });

  return captain;
};
