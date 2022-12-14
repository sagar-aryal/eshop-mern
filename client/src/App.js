import Header from "./layouts/header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "./Routers";
import CategoryProvider from "./context/categoryContext";

const App = () => {
  return (
    <div className="container">
      <CategoryProvider>
        <Header />
      </CategoryProvider>

      <Routers />
      <ToastContainer />
    </div>
  );
};

export default App;
