import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ActiveStocksHeader() {
  return (
    <>
      <div
        className="page-header "
        style={{
          backgroundImage:
            "url(" + require("assets/img/background12.png").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <br />
            <h1>
              Live Active Charts <br />
            </h1>
            <h4>
              The Stock market is a very profitable place, yet very risky and
              extremely stressful. To harness the profitable part of the stock
              market with very minimal side effects, we came up with a solution.
              <br />
              <br />
              <br />
              Our stock market agent will extract live metadata, using secure
              API communication, from key US Stock Market Exchanges, making its
              prices extremely precise to be able to trade. The metadata
              extracted will be then used in a mathematical predicting algorithm
              that will predict the next stock’s move, then trigger a buy or
              sell action based on the most profitable prediction.
              <br />
              <br />
            </h4>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ActiveStocksHeader;
