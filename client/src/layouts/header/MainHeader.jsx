import Logo from "../../components/logo/Logo";
import AllCategories from "../../components/allCategories/AllCategories";
import SearchBar from "../../components/searchBar/SearchBar";

import { FaHeart, FaUserAlt, FaCartPlus } from "react-icons/fa";

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="logo">
        <Logo />
      </div>
      <div className="center">
        <AllCategories />
        <SearchBar />
      </div>
      <div className="left">
        <FaHeart />
        <FaCartPlus />
        <FaUserAlt />
      </div>
    </div>
  );
};

export default MainHeader;
