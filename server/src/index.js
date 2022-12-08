const express = require("express");
const cookieParser = require("cookie-parser");

const { PORT } = require("./config/secrets");
const mongooseConnectDB = require("./config/database");
const userRouter = require("./routes/user");

const app = express();

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// database connection
mongooseConnectDB();

// routers
app.use("/api/v1/user", userRouter);

// server listener
app.listen(PORT || 8000, () => {
  console.log("App is running at Port 5000");
});
