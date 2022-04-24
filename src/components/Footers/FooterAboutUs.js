import React from "react";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function FooterAboutUs() {
  return (
    <>
      <footer className="footer footer-big footer-black">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="9" sm="9" xs="12">
              <Row>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="/presentation">Home</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="/contact-us">Favorite Tickers</a>
                      </li>
                      <li>
                        <a href="/about-us">Guidance</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="/">Stocks Charts</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <hr />
              <div className="copyright">
                <div className="pull-left">
                  Copyright © {new Date().getFullYear()} Cloud Stock Market
                  Smart Agent.
                </div>
                <div className="links pull-right">
                  <ul>
                    <li className="mr-1">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Company Policy
                      </a>
                    </li>
                    |{" "}
                    <li className="mr-1">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Terms
                      </a>
                    </li>
                    |{" "}
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterAboutUs;
