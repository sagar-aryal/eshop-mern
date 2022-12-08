const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be atleast of six characters"],
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
