import React from "react";
import { Button, Col, Row } from "reactstrap";

const OrderFinalSuccess = (props) => {
  const {
    address,
    bedroom,
    bathroom,
    description,
    imagePreview,
  } = props.values;
  const { images } = props;
  console.log(images);
  return (
    <div>
      <Row style={{marginTop: "5%", textAlign: "center", color: "black"}}>
        <Col md="12" sm="12">
          <h3 style={{fontWeight: "bold"}}>PhoneHub</h3>
          <h2 style={{fontWeight: "bold", marginTop: "5%", marginBottom: "3%"}}>Order Confirmation</h2>
          <hr style={{marginBottom: "5%"}}></hr>
          <h4 style={{fontWeight: "bold"}}>Order Number: <span style={{color: "grey", textDecorationLine: "underline"}}>147852369</span></h4>
          <p style={{marginTop: "7%", marginBottom: "7%"}}>
            Hi Ali Fakih, <br/>
            Thank you for shopping at <a href="/presentation">PhoneHub.com</a>. We'll be in touch again soon as your items become ready for shipping or In-Store pickup.
            You will not be charged for an item until it has been shipped or picked up in a store.
          </p>
          <h4 style={{fontWeight: "bold"}}>Billing Address: <p style={{color: "grey", fontWeight: "bold"}}>Address 1, City, State, Country</p></h4>
          <h4 style={{fontWeight: "bold"}}>Payment Method: <p style={{color: "grey", fontWeight: "bold"}}>Delivery Cash</p></h4>
        </Col>
      </Row>
      <Row className="buttons-row">
        <Col md="12" sm="12">
          <Button
            block
            className="btn-round"
            color="primary"
            type="submit"
            style={{marginTop: "5%"}}
            href="/presentation"
          >
            Back To Home
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default OrderFinalSuccess;
