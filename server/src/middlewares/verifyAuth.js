const jwt = require("jsonwebtoken");

const { JWT_SECRET_KEY } = require("../config/secrets");

const verifyAuth = (req, res, next) => {
  /* const headers = req.headers["authorization"];
  const token = headers.split(" ")[1];
  */

  const cookies = req.headers.cookie;

  if (!cookies) {
    return res.status(400).json({ message: "Cookie expires" });
  }

  const token = cookies.split("=")[1];

  if (!token) {
    return res.status(400).json({ message: "Invalid token" });
  }

  const verify = jwt.verify(token, JWT_SECRET_KEY);

  if (!verify) {
    return res.status(400).json({ message: "Authentication failed" });
  }
  req.id = verify.id;
  next();
};

module.exports = verifyAuth;
