import React from "react";
// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function SectionCards() {
  return (
    <>
      <div
        className="section section-cards section-gold"
        style={{
          backgroundImage:
            "url(" + require("assets/img/background13.png").default + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="codrops-header">
          <Row>
            <Col lg="4" md="6">
              <div className="section-description">
                <h3 className="title">Activate the Agent Now!</h3>
                <h6 className="category">High returns, No effort</h6>
                <h5 className="description">
                  Activate our Cloud Stock Market Smart Agent now and start
                  earning Passive Income
                </h5>
              </div>
            </Col>
          </Row>
        </div>
        <section className="section-intro">
          <div className="isolayer isolayer--deco1 isolayer--shadow js">
            <ul className="grid grid--loaded">
              <li className="grid__item first-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={require("assets/img/aapl2.png").default}
                  />
                </a>
              </li>
              <li className="grid__item second-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={require("assets/img/TSLA.png").default}
                  />
                </a>
              </li>

              <li className="grid__item third-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={require("assets/img/TSLA.png").default}
                  />
                </a>
              </li>
              <li className="grid__item fourth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={require("assets/img/TSLA.png").default}
                  />
                </a>
              </li>
              <li className="grid__item fifth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={require("assets/img/aapl2.png").default}
                  />
                </a>
              </li>

              <li className="grid__item seventh-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={require("assets/img/aapl2.png").default}
                  />
                </a>
              </li>
              <li className="grid__item eight-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={require("assets/img/aapl2.png").default}
                  />
                </a>
              </li>
              <li className="grid__item ninth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={require("assets/img/aapl2.png").default}
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default SectionCards;
