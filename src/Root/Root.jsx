import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
