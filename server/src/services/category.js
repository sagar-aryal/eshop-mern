const { find } = require("../models/category");
const Category = require("../models/category");

const createCategory = async (data) => {
  const createdCategory = await Category.create({
    ...data,
  });
  return createdCategory;
};

const getCategories = async () => {
  const fetchedCategories = await Category.find({});
  return fetchedCategories;
};

module.exports = { createCategory, getCategories };
