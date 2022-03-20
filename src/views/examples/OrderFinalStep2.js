import React from "react";
import { Button, Col, Row, Table } from "reactstrap";

const OrderFinalStep2 = ({
  nextStep,
  prevStep,
  values,
  handleChange,
  validation,
}) => {
  const { address, bedroom, bathroom, description } = values;

  return (
    <div className="container mt-5">
      <Row className="buttons-row" style={{ marginTop: "5%", color: "black" }}>
        <Col md="6" sm="6">
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>
            PhoneHub Store
          </span>
          <br />
          <span>Beirut, Lebanon </span>
          <br />
          <span> Phone: +961 3 123456 </span>
          <br />
          <span>
            Email: <a href="mailto:office@phonehub.com">office@phonehub.com</a>
          </span>
        </Col>
        <Col md="6" sm="6" style={{ textAlign: "right" }}>
          <span style={{ fontWeight: "bold" }}>
            Order Date:{" "}
            <span style={{ fontWeight: "normal" }}>24 / 05 / 2021</span>
          </span>
          <br></br>
          <span style={{ fontWeight: "bold" }}>
            Estimated Delivery Date:{" "}
            <span style={{ fontWeight: "normal" }}>26 / 05 / 2021</span>
          </span>
        </Col>
      </Row>
      <Row className="buttons-row" style={{ marginTop: "7%", color: "black" }}>
        <Col md="6" sm="6">
          <span>Billed To </span>
          <br />
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>
            Ramy Sawan{" "}
          </span>
          <br />
          <span>Address 1, City </span>
          <br />
          <span>State, Country</span>
        </Col>
        <Col md="6" sm="6" style={{ textAlign: "right" }}>
          <span>Payment Method</span>
          <br />
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>
            Cash Delivery
          </span>
          <br />
          <br />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Total &nbsp;&nbsp;<span style={{ fontSize: "25px" }}>$ 66</span>
          </span>
        </Col>
      </Row>
      <Row style={{ marginTop: "6%" }}>
        <Col md="12" sm="7">
          <h6>Order Summary</h6>
          <Table responsive striped>
            <thead>
              <tr
                style={{
                  backgroundColor: "#f5593d",
                  color: "white",
                  opacity: ".7",
                }}
              >
                <th className="text-center" style={{ fontWeight: "bold" }}>
                  #
                </th>
                <th className="text-center" style={{ fontWeight: "bold" }}>
                  Product
                </th>
                <th className="text-center" style={{ fontWeight: "bold" }}>
                  Price
                </th>
                <th className="text-center" style={{ fontWeight: "bold" }}>
                  Qty
                </th>
                <th className="text-center" style={{ fontWeight: "bold" }}>
                  Tax
                </th>
                <th className="text-center" style={{ fontWeight: "bold" }}>
                  Discount
                </th>
                <th className="text-center" style={{ fontWeight: "bold" }}>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">Product 1</td>
                <td className="text-center">$ 25</td>
                <td className="text-center">2</td>
                <td className="text-center">10 %</td>
                <td className="text-center">0 %</td>
                <td className="text-center">$ 55</td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td className="text-center">Product 2</td>
                <td className="text-center">$ 10</td>
                <td className="text-center">1</td>
                <td className="text-center">10 %</td>
                <td className="text-center">0 %</td>
                <td className="text-center">$ 11</td>
              </tr>
              <tr>
                <td colSpan="5" />
                <td className="text-center td-total">Total</td>
                <td className="text-center td-price">
                  <small>$ </small>
                  66
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="buttons-row" style={{ marginTop: "2%" }}>
        <Col md="6" sm="6">
          <Button
            block
            className="btn-round"
            onClick={prevStep}
            color="danger"
            type="submit"
            outline
          >
            Back
          </Button>
        </Col>
        <Col md="6" sm="6">
          <Button
            block
            className="btn-round"
            onClick={nextStep}
            color="primary"
            type="submit"
          >
            Next
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default OrderFinalStep2;
