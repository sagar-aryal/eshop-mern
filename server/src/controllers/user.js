const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const { JWT_SECRET_KEY } = require("../config/secrets");

const registerUser = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const isUserExit = await User.findOne({ email });

  if (isUserExit) {
    return res
      .status(400)
      .json({ message: "User already exists, Please login" });
  }

  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }

  return res
    .status(200)
    .json({ message: "User registered successfully", user });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const isUserExit = await User.findOne({ email });

  if (!isUserExit) {
    return res
      .status(400)
      .json({ message: "User doesn't exists, Please register" });
  }

  const verifyPassword = bcrypt.compareSync(password, isUserExit.password);

  if (!verifyPassword) {
    return res.status(400).json({ message: "Invalid Credientials" });
  }

  const token = jwt.sign({ id: isUserExit._id }, JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  return res.status(200).json({
    message: "User logged in successfully",
    email: isUserExit.email,
    token,
  });
};

const getUser = async (req, res, next) => {
  const userId = req.id;

  const user = await User.findById(userId, "-password");

  if (!user) {
    return res.status(404).json({ message: "User doesn't found" });
  }

  return res.status(200).json({ message: "User found successfully", user });
};

module.exports = { registerUser, loginUser, getUser };
