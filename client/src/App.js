import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./layouts/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import OurTeam from "./pages/ourTeam/OurTeam";
import Contact from "./pages/contact/Contact";
import WishList from "./pages/wishList/WishList";
import Cart from "./pages/cart/Cart";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
