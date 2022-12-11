import { Link, NavLink } from "react-router-dom";

import AllCategories from "../../components/allCategories/AllCategories";
import SocialMedia from "../../components/socialMedia/SocialMedia";

import "./Header.css";
import {
  FaSearch,
  FaHeart,
  FaUserAlt,
  FaCartPlus,
  FaPhoneVolume,
} from "react-icons/fa";

const Logo = () => {
  return <div className="logo">eShop</div>;
};

const SearchBar = () => {
  return (
    <form className="search-box">
      <input type="text" placeholder="Search..." />
      <FaSearch style={{ color: "rgb(68, 66, 66)", fontSize: "14px" }} />
    </form>
  );
};

const NavBar = () => {
  const menu = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/shop",
      name: "Shop",
    },
    {
      id: 4,
      path: "/ourteam",
      name: "Our Team",
    },
    {
      id: 5,
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : " ")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const OpeningInfo = () => {
  return (
    <div className="openingInfo">
      <FaPhoneVolume style={{ fontSize: "24px" }} />
      <div className="info">
        <span>(358) 400272727</span>
        <p>Mon-Fri 09:00-20:00</p>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="main-header">
        <Link to="/" className="left">
          <Logo />
        </Link>

        <div className="center">
          <AllCategories />
          <SearchBar />
        </div>

        <div className="right">
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
      <div className="sub-header">
        <AllCategories />
        <NavBar />
        <SocialMedia />
        <OpeningInfo />
      </div>
    </div>
  );
};

export default Header;
