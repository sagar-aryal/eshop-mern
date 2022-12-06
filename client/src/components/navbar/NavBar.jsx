import { NavLink } from "react-router-dom";

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

export default NavBar;
