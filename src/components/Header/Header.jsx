import { motion } from "framer-motion";
import "./header.css";
import { Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
function Header() {
  const serviceOptions = [
    {
      name: "Home Cleaning",
    },
    {
      name: "Transport",
    },
    {
      name: "Electrical Help",
    },
  ];
  const headerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.3 },
    },
  };
  return (
    <motion.div variants={headerVariant} initial="hidden" animate="visible">
      <div className="firstDiv">
        <motion.div
          initial={{ x: "-150vh" }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,
            duration: 0.6,
            type: "spring",
            damping: 12,
          }}
          className="insideDiv py-5 text-center"
        >
          <h3>Your Community Assistance Hub</h3>
          <span>Don&apos;t Tackle it alone, Get help whenever you want</span>
          <div className="mt-4 inputContainer">
            <Form>
              <input
                className="searchInput"
                placeholder="Search for services"
              />
            </Form>
            <BsSearch className="me-2" style={{ cursor: "pointer" }} />
          </div>
          <div className="d-flex align-items-center justify-content-around mt-3 flex-wrap">
            {serviceOptions.map((option, ind) => {
              const { name } = option;
              return (
                <div className="mb-2 serviceTags" key={ind}>
                  <motion.span
                    whileHover={{ scale: 500, originX: 0, color: "#0095ff" }}
                  >
                    {name}
                  </motion.span>
                </div>
              );
            })}
            <span className="seeMore">See More</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Header;
