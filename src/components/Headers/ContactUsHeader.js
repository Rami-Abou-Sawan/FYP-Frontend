import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ContactUsHeader() {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage:
            "url(" + require("assets/img/background13.png").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <h1>Get in touch with us</h1>
            <h3>Let us tell you more about what we do.</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContactUsHeader;
