const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const { MONGODB_URI } = require("./secrets");

const mongooseConnectDB = () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Server successfully connected to the database"))
    .catch((err) => console.log("Error connecting to the database", err));
};

module.exports = mongooseConnectDB;
