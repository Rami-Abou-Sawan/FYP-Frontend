/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core comments

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/background11.png").default + ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">
                  Cloud Stock Market Smart Agent
                </h1>
                <div className="fog-low">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png").default}
                  />
                </div>
                <div className="fog-low right">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png").default}
                  />
                </div>
              </div>
              <h2 className="presentation-subtitle text-center">
                Earn passive income while our agent trades stocks for you.
              </h2>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
