import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

// core components

function SectionOverview() {
  return (
    <>
      <div
        className="section section-overview"
        style={{
          backgroundImage:
            "url(" + require("assets/img/background11.png").default + ")",
          backgroundSize: "cover",
        }}
      >
        <Container fluid>
          <Row>
            <Col className="offset-md-2 text-center" md="8">
              <div className="space-top" />
              <h2 className="title" style={{ color: "white" }}>
                Perks of using our Agent
              </h2>
            </Col>
            <Container>
              <div className="space-top" />
              <Row>
                <Col sm="3">
                  <Card data-background="color" data-color="green">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-money-coins" />
                      </div>
                      <CardTitle tag="h4">Passive Income</CardTitle>
                      <p className="card-description">
                        Our agent will trigger buy and sell actions based on
                        predicion algorithms in order to make profit.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-watch-time" />
                      </div>
                      <CardTitle tag="h4">Save Time</CardTitle>
                      <p className="card-description">
                        Instead of spending the whole day trading stocks, our
                        agent will do it for you while you proceed with other
                        tasks.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="green">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <CardTitle tag="h4">Monitor Stocks</CardTitle>
                      <p className="card-description">
                        Stay up-to-date with the stock market as we visualize
                        precise stocks prices and charts.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-align-center" />
                      </div>
                      <CardTitle tag="h4">Trade here</CardTitle>
                      <p className="card-description">
                        If you would like to take the wheel, you can issue any
                        trade action using our smart agent.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionOverview;
