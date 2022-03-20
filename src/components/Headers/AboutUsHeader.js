import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutUsHeader() {
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
              Our Agent <br />
            </h1>
            <h4>
              The Stock market is a very profitable place, yet very risky and
              extremely stressful. To harness the profitable part of the stock
              market with very minimal side effects, we came up with a solution.
              <br />
              <br />
              The main problem of trading stocks is the extremely high
              volatility. Stock prices can go up and down quickly and very
              frequently. This high volatility can earn the traders very good
              profits, but can also destroy both of their financial and personal
              lives. Stock traders have to watch the stocks charts all day to
              analyze them to know when to buy and when to sell to gain profit,
              and even stay up all night to catch the perfect moment. This will
              ruin their lives by stressing them out the whole day. Since the
              prices go up and down frequently, you can almost find a pattern by
              watching long term charts which increases your chance to know when
              to buy and sell for profit. This is where our Agent comes in
              handy. <br />
              <br />
              Our stock market agent will extract live metadata, using secure
              API communication, from key US Stock Market Exchanges, making its
              prices extremely precise to be able to trade. The metadata
              extracted will be then used in a mathematical predicting algorithm
              that will predict the next stock’s move, then trigger a buy or
              sell action based on the most profitable prediction.
            </h4>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
