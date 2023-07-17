import { Route, Routes } from "react-router";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaviconLoop } from "./FaviconLoop";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/authentication";
import About from "./Pages/About/About";
import ServicesRoutes from "./Pages/Services/ServicesRoutes";
import Layout from "./components/Layout/Layout";
import { PrivateRoutes } from "./privateRoute";

function App() {
  return (
    <div>
      <ToastContainer
        containerId="mainContainer"
        transition={Slide}
        autoClose={2000}
      />
      <FaviconLoop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/services/*" element={<ServicesRoutes />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
