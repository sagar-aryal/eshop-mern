import Header from "./layouts/header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "./Routers";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routers />
      <ToastContainer />
    </div>
  );
};

export default App;
