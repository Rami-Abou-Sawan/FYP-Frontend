import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionComponents() {
  return (
    <>
      <div
        className="section section-components section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/background12.png").default + ")",
          backgroundSize: "cover",
        }}
      >
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={require("assets/img/monitor.png").default}
              />
              <img
                alt="..."
                className="table-img"
                src={require("assets/img/candles.png").default}
              />
              <img
                alt="..."
                className="share-btn-img"
                src={require("assets/img/candles.png").default}
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={require("assets/img/goingup.png").default}
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={require("assets/img/goingup.png").default}
              />

              <img
                alt="..."
                className="pin-btn-img"
                src={require("assets/img/TSLA.png").default}
              />
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">How does our agent make passive income?</h3>
              <h6 className="category">Trigger buy & sell actions</h6>
              <h5 className="description">
                Our stock market agent will extract live metadata, using secure
                API communication, from key US Stock Market Exchanges, making
                its prices extremely precise to be able to trade. The metadata
                extracted will be then used in a mathematical predicting
                algorithm that will predict the next stock’s move, then trigger
                a buy or sell action based on the most profitable prediction.
              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SectionComponents;
