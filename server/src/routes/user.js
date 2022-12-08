const express = require("express");

const { registerUser, loginUser, getUser } = require("../controllers/user");
const verifyAuth = require("../middlewares/verifyAuth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", verifyAuth, getUser);

module.exports = router;
