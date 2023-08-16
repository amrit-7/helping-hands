import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { setCurrentUser } from "../../store/store";
import { baseAPI } from "../../../api";
import "./navbar.css";

function NavigationBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => {
    return state.user.currentUser;
  });
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${baseAPI}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${currentUser && currentUser.token}`,
          },
        }
      );
      console.log("🚀 ~ file: NavigationBar.jsx:32 ~ handleLogout ~ res:", res);
      if (res.status === 200) {
        toast.success(`${res.data} ✔`);
        dispatch(setCurrentUser(null));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <Navbar expand="md" className="navigationbar">
        <Container>
          <motion.div
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link to={"/"} className="navBrand">
              helpinghands
            </Link>
          </motion.div>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <motion.div
                className="ms-auto"
                initial={{ y: "-130vw" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link href="#action1">
                    <span className="navLinks">Near Me</span>
                  </Nav.Link>
                  <Nav.Link href="/services">
                    <span className="navLinks">Services</span>
                  </Nav.Link>
                  <Nav.Link href="/about" className=" navLinks">
                    <span className="navLinks">About</span>
                  </Nav.Link>
                  {currentUser ? (
                    <NavDropdown title={currentUser.name} className="navLinks">
                      <NavDropdown.Item onClick={handleLogout}>
                        Logout
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">
                        Profile
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Nav.Link href="/login" className=" navLinks">
                      <span className="navLinks">Login</span>
                    </Nav.Link>
                  )}
                </Nav>
              </motion.div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavigationBar;
