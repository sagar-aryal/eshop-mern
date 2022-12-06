import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form className="search-box">
      <input type="text" placeholder="Search..." />
      <FaSearch style={{ color: "rgb(68, 66, 66)", fontSize: "14px" }} />
    </form>
  );
};

export default SearchBar;
