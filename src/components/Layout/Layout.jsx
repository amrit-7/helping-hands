import { Outlet } from "react-router";
import NavigationBar from "../Navbar/NavigationBar";
import Footer from "../Footer/Footer";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <NavigationBar />
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
