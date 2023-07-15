import { Fragment } from "react";
import Header from "../../components/Header/Header";
import ServicesCards from "../../components/Services/ServicesCards";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import Tasks from "../../components/Tasks/Tasks";

const Home = () => {
  const HomeVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.6 },
    },
  };
  return (
    <Fragment>
      <Header />
      <motion.div
        variants={HomeVariant}
        initial="hidden"
        animate="visible"
        className="my-5 py-5 container"
      >
        <h4 className="mb-4">Popular Services</h4>
        <ServicesCards />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        viewport={{ once: true, amount: 0 }}
        className="bg-light my-3"
      >
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
              <h4>Don&apos;t let problems weigh you down</h4>
              <p>
                Whenever you find yourself in a bind ask for help. Whether you
                need a handyman for household repairs, a tutor for academic
                assistance, a tech expert to fix your gadgets, or any other type
                of assistance With a pocket friendly chintzy rates
              </p>
              <ul className="detailsList">
                <li>Choose your Helper by reviews and distance</li>
                <li>Schedule it whenever it suits you</li>
                <li>Discuss, Pay, Tip and have fun</li>
              </ul>
            </Col>
            <Col className="col-12 col-lg-6 col-md-12 d-flex flex-column justify-content-center">
              <img
                src="https://images.pexels.com/photos/4173106/pexels-photo-4173106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="services"
                width="100%"
              />
            </Col>
          </Row>
        </Container>
      </motion.div>
      <Container className="p-5">
        <Row className="justify-content-center align-items-center">
          <Col className="my-2 d-flex justify-content-center align-items-center">
            <Tasks />
          </Col>
          <Col className="my-2 d-flex justify-content-center align-items-center">
            <Tasks />
          </Col>
          <Col className="my-2 d-flex justify-content-center align-items-center">
            <Tasks />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
