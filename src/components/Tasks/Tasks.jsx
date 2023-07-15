import { Col, Row } from "react-bootstrap";
import {
  MdOutlineWorkspacePremium,
  MdCheckCircleOutline,
} from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import "./Task.css";

const Tasks = () => {
  return (
    <div className="py-4 px-4 taskCard rounded">
      <Row className="py-2">
        <Col className="col-4 p-0">
          <img
            src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_130,w_130/v1517529625/q19pyz80iljwc7dkr2id.jpg"
            className="rounded"
            width="100px"
          />
        </Col>
        <Col className="col-8 d-flex flex-column justify-content-center">
          <h5>
            John K. <MdOutlineWorkspacePremium color="skyblue" />
          </h5>
          <span>
            <AiOutlineStar color="gold" size="20" /> 99% positive reviews
          </span>
          <span>
            <MdCheckCircleOutline className="me-1" color="green" size="20px" />
            101 completed tasks
          </span>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="d-flex flex-column">
          <span className="text-secondary">Featured Skills</span>
          <div className="d-flex flex-column">
            <div className="d-flex">
              <Col className="text-start">
                <span style={{ fontSize: "15px", fontWeight: 500 }}>
                  Help Moving
                </span>
              </Col>
              <Col className="text-end">
                <span>₹100/hr</span>
              </Col>
            </div>
            <div className="d-flex">
              <Col className="text-start">
                <span style={{ fontSize: "15px", fontWeight: 500 }}>
                  Home Repair
                </span>
              </Col>
              <Col className="text-end">
                <span>₹150/hr</span>
              </Col>
            </div>
            <div className="d-flex">
              <Col className="text-start col-8">
                <span style={{ fontSize: "15px", fontWeight: 500 }}>
                  Furniture Assembly
                </span>
              </Col>
              <Col className="text-end">
                <span>₹170/hr</span>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <p style={{ fontSize: "14px" }} className="text-muted text-sm">
          I have completed many tasks moving furniture safely from offices,
          apartments, and homes. Tools inc...
        </p>
      </Row>
    </div>
  );
};

export default Tasks;
