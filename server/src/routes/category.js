const express = require("express");

const {
  createNewCategory,
  getAllCategories,
} = require("../controllers/category");

const router = express.Router();

router.post("/createNewCategory", createNewCategory);
router.get("/getAllCategories", getAllCategories);

module.exports = router;
