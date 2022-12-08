const express = require("express");

const verifyAuth = require("../middlewares/verifyAuth");
const { registerUser, loginUser, getUser } = require("../controllers/user");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", verifyAuth, getUser);

module.exports = router;
