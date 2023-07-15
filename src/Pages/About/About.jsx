import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const About = () => {
  return (
    <Container className="p-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Col>
          <Row>
            <Col>
              <h3>About Us</h3>
              <p>
                "Helping Hands" a platform built on the spirit of community and
                mutual support. Whether you're a student looking to earn some
                extra income, a stay-at-home parent with spare time, or someone
                simply wanting to make a positive impact, our app is here to
                bring people together and foster a stronger, more connected
                community.
                <br />
                <br />
                With "Helping Hands," you have the power to both give and
                receive help. As a service provider, you can showcase your
                skills, talents, and availability, offering a wide range of
                services that cater to the needs of others. From household
                chores and pet sitting to tutoring and event planning, there's
                no limit to the ways you can make a difference. On the other
                hand, as a customer, you have access to a diverse pool of
                reliable individuals who are ready to assist you with various
                tasks and responsibilities. Need someone to deliver items, walk
                your dog, or help with home repairs? Simply browse through our
                extensive list of service providers, connect with the one that
                suits your needs, and get the support you require.
                <br /> <br /> At "Helping Hands," we prioritize safety and
                reliability. We have implemented a thorough verification process
                to ensure that all our service providers are trustworthy and
                qualified. Additionally, our rating and review system allows
                users to provide feedback and build a community based on
                transparency and trust. We believe that by connecting people in
                their neighborhoods and fostering a culture of assistance and
                reciprocity, we can create a stronger and more resilient
                community. With "Helping Hands," no task is too small, and no
                act of kindness goes unnoticed.
              </p>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=550&q=80"
                alt="about"
                className="rounded"
              />
            </Col>
          </Row>
        </Col>
      </motion.div>
    </Container>
  );
};

export default About;
