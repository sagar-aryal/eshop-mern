const Category = require("../models/category");
const { successResponse, errorResponse } = require("../utils/response");
const { createCategory, getCategories } = require("../services/category");

const createNewCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const createdCategory = await createCategory({ name });
    return successResponse(
      res,
      200,
      "New category created successfully",
      createdCategory
    );
  } catch (error) {
    return errorResponse(res, 400, "Failed to create new category", error);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const fetchedCategories = await getCategories({});
    return successResponse(
      res,
      200,
      "All categories fetched successfully",
      fetchedCategories
    );
  } catch (error) {
    return errorResponse(res, 400, "Failed to fetch all categories", error);
  }
};

module.exports = { createNewCategory, getAllCategories };
