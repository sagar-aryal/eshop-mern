import { Link } from "react-router-dom";

import Logo from "../../components/logo/Logo";
import AllCategories from "../../components/allCategories/AllCategories";
import SearchBar from "../../components/searchBar/SearchBar";

import { FaHeart, FaUserAlt, FaCartPlus } from "react-icons/fa";

const MainHeader = () => {
  return (
    <div className="main-header">
      <Link to="/" className="logo">
        <Logo />
      </Link>

      <div className="center">
        <AllCategories />
        <SearchBar />
      </div>
      <div className="left">
        <Link to="wishlist">
          <FaHeart />
        </Link>
        <Link to="cart">
          <FaCartPlus />
        </Link>
        <Link to="login">
          <FaUserAlt />
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
