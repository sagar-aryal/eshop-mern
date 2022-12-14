import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";

const AllCategories = () => {
  const { categories, activeCategory, handleCategoryChange } =
    useContext(CategoryContext);

  return (
    <div className="categories">
      <select name="categories">
        <option value="select">All categories</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 2</option>
      </select>
    </div>
  );
};

export default AllCategories;
