const bcrypt = require("bcryptjs");

const User = require("../models/user");

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

  return res
    .status(200)
    .json({ message: "User logged in scuccessfully", id: isUserExit._id });
};

module.exports = { registerUser, loginUser };
