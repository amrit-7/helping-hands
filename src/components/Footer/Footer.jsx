import { Container } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light m-0 p-3">
      <div className="d-flex flex-column align-items-center">
        <span className="mb-3">
          Helping Hands, Your community assistance hub
        </span>

        <div>
          <FaFacebook className="me-3" size={30} />
          <FaTwitter className="me-3" size={30} />
          <FaLinkedinIn className="me-3" size={30} />
          <FaInstagram size={30} />
        </div>
        <span className="mt-4">Made in India with ❤</span>
      </div>
    </Container>
  );
};

export default Footer;
