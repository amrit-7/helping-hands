import axios from "axios";
import { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { baseAPI } from "../../../../api";

const SerivcesRate = () => {
  const currentUser = useSelector((state) => {
    return state.user.currentUser;
  });
  useEffect(() => {
    const getServiceRates = async () => {
      const res = await axios.post(
        `${baseAPI}/add_prices`,
        {},
        {
          headers: {
            Authorization: `Bearer ${currentUser && currentUser.token}`,
          },
        }
      );
      console.log(res);
    };
    getServiceRates();
  }, []);
  return (
    <Container className="p-5">
      <Row>
        <Col>
          <h5>Set Average rates for your services</h5>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Table className="mt-3 table-striped">
            <thead>
              <tr>
                <th>Services</th>
                <th>Average Rates/hr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pick and Drop</td>
                <td>
                  <input
                    style={{ minWidth: "auto", maxWidth: "300px" }}
                    className="form-control"
                    type="number"
                    defaultValue={200}
                  />
                </td>
              </tr>
              <tr>
                <td>Cleaning</td>
                <td>
                  <input
                    style={{ minWidth: "auto", maxWidth: "300px" }}
                    className="form-control"
                    type="number"
                    defaultValue={150}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default SerivcesRate;
