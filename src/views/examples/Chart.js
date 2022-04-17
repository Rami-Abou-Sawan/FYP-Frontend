import React, { useState } from "react";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import { render } from "react-dom";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";
import ActiveStocksHeader from "components/Headers/ActiveStocksHeader.js";

import Charts from "components/Charts/Charts.js";
import { getData } from "utils.js";
import "react-activity/dist/library.css";
import { Digital } from "react-activity";
import { Checkbox } from "react-bootstrap";

class Chart extends React.Component {
  componentWillReceiveProps(nextProps) {
    getData(nextProps.ticker).then((data) => this.setState({ data }));
  }
  componentDidMount() {
    getData(this.props.ticker).then((data) => this.setState({ data }));
  }

  render() {
    if (this.state == null) {
      return (
        <Digital
          size={100}
          style={{
            position: "absolute",
            left: "50%",
            top: "20%",
            transform: "translate(-50%, -50%)",
            background: "#303030",
            width: 2000,
            height: 350,
            color: "#FFFFFF",
          }}
        />
      );
    }
    return (
      <div style={{ background: "#303030" }}>
        <ColorNavbar />
        <ActiveStocksHeader />
        <Charts
          type={"hybrid"}
          ticker={this.props.ticker}
          data={this.state.data}
        />
      </div>
    );
  }
}

const App = () => {
  let tickers = [
    "AAPL",
    "TSLA",
    "AMZN",
    "NFLX",
    "INTC",
    "ORCL",
    "FB",
    "NVDA",
    "GOOGL",
    "AMD",
    "MSFT",
  ];
  const [ticker, setTicker] = useState(tickers[0]);
  let final = [];
  for (let elt of tickers) {
    final.push(
      <Checkbox key={elt} onChange={() => setTicker(elt)}>
        {elt}
      </Checkbox>
    );
  }
  let buttons = [];
  for (let elt of tickers) {
    buttons.push(
      <div id={elt}>
        <input id="buy" placeholder={`Left Click To Set ${elt} Buying Price`} />
        <input
          id="sell"
          placeholder={`Right Click To Set ${elt} Selling Price`}
        />
        <button
          onClick={() => {
            const buyPrice = document
              .getElementById(elt)
              .querySelector("#buy").value;
            const sellPrice = document
              .getElementById(elt)
              .querySelector("#sell").value;
            if (
              buyPrice === "" ||
              sellPrice === "" ||
              buyPrice instanceof String ||
              sellPrice instanceof String
            ) {
              alert("No values detected");
            } else {
              fetch(`https://wikinumber.org/test/order`, {
                crossDomain: true,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  symbol: elt,
                  buy: Number(buyPrice),
                  sell: Number(sellPrice),
                }),
              })
                .then((res) => {
                  console.log(res);
                  alert(
                    `${elt} Order Placed, Buy: ${buyPrice}, Sell: ${sellPrice}`
                  );
                })
                .catch((err) => console.log(err));
            }
          }}
        >
          Send {elt} Order
        </button>
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(" + require("assets/img/background12.png").default + ")",
      }}
    >
      <Chart ticker={ticker} />
      <br />
      <br />
      <br />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {final}
      </div>
      <br />
      <br />
      <br />
      {buttons}
      <br />
      <br />
      <br />
      <br />
      <FooterAboutUs />
    </div>
  );
};

export default App;
