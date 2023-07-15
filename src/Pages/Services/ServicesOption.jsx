import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import "./Services.css";
import { ChangingText } from "../../FaviconLoop";
const ServicesOption = () => {
  const navigate = useNavigate();
  const serviceOptions = [
    {
      id: 1,
      option: "Provide Service",
      details:
        "Post the services you would like to offer, service seekers will choose you for their help",
      route: "/services/verify",
    },
    {
      id: 2,
      option: "Seek Service",
      details:
        "Search for the services you want, select the service provider and get your work done",
      route: "/services/seek",
    },
  ];
  const handleNavigate = (route) => {
    navigate(`${route}`);
  };
  const cardVariant = {
    hidden: {
      x: "-200vh",
    },
    visible: {
      x: 0,
      transition: { delay: 0.3, duration: 0.5, type: "spring", damping: 12 },
    },
  };
  return (
    <Container className="p-5">
      <Row>
        <div className=" col d-flex flex-column align-items-center text-center justify-content-center">
          <h5>Select your option</h5>
          <motion.span
            initial={{ x: "-200vh" }}
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="textChanging"
          >
            <ChangingText />
          </motion.span>
        </div>
      </Row>
      <Row className="mt-4">
        {serviceOptions.map((service) => {
          const { id, option, details, route } = service;
          return (
            <motion.div
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              key={id}
              className="col d-flex justify-content-center m-2"
            >
              <div className="cardser">
                <p className="heading">{option}</p>
                <p className="para">{details}</p>
                <div className="overlay"></div>
                <button
                  className="card-btn"
                  onClick={() => handleNavigate(route)}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          );
        })}
      </Row>
    </Container>
  );
};

export default ServicesOption;
