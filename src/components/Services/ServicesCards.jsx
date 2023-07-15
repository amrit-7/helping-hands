import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { ImPriceTag } from "react-icons/im";
import "./servicecardstyles.css";

const defaultServices = [
  {
    name: "Delivery",
    avgPrice: "100 - 500",
    imageSrc:
      "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg",
  },
  {
    name: "Help Moving",
    avgPrice: "10 - 200",
    imageSrc:
      "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Transport",
    avgPrice: "200 - 1000",
    imageSrc:
      "https://images.pexels.com/photos/1386649/pexels-photo-1386649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Electrical Help",
    avgPrice: "100 - 1000",
    imageSrc:
      "https://images.pexels.com/photos/8005368/pexels-photo-8005368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Housework",
    avgPrice: "100 - 500",
    imageSrc:
      "https://images.pexels.com/photos/5591833/pexels-photo-5591833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Yard work",
    avgPrice: "100 - 400",
    imageSrc:
      "https://images.pexels.com/photos/5529604/pexels-photo-5529604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Heavy Lifting",
    avgPrice: "100 - 500",
    imageSrc:
      "https://images.pexels.com/photos/4971243/pexels-photo-4971243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "BabySitting",
    avgPrice: "400 - 800",
    imageSrc:
      "https://images.pexels.com/photos/3985022/pexels-photo-3985022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ServicesCards = () => {
  return (
    <Container className="serviceCardContainer">
      {defaultServices.map((service, ind) => {
        return (
          <motion.div
            key={ind}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="serviceCard"
          >
            <Row className="m-0 p-0">
              <img
                className="p-0 serviceImg"
                src={service.imageSrc}
                width="300px"
                height="200px"
              />
            </Row>
            <Row className="m-0">
              <div className="detailsDiv py-2">
                <span>{service.name}</span>
                <span className="text-muted" style={{ fontSize: "12px" }}>
                  <ImPriceTag className="me-2" />
                  Avg Price : {service.avgPrice}
                </span>
              </div>
            </Row>
          </motion.div>
        );
      })}
    </Container>
  );
};

export default ServicesCards;
