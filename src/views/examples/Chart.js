import React, { useState, useEffect } from "react";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import Charts from "components/Charts/Charts.js";
import { getData, getOrders, getTickers } from "utils.js";
import "react-activity/dist/library.css";
import { Digital } from "react-activity";
import { Checkbox } from "react-bootstrap";

class Chart extends React.Component {
  componentWillReceiveProps(nextProps) {
    getData(nextProps.ticker).then((data) => {
      if (data.length === 0) this.setState(null);
      else this.setState({ data });
    });
  }
  componentDidMount() {
    getData(this.props.ticker).then((data) => {
      if (data.length === 0) this.setState(null);
      else this.setState({ data });
    });
  }

  render() {
    if (this.props.ticker == null) {
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
    if (this.state == null) {
      return <p>Ticker doesn't contain data yet</p>;
    } else
      return (
        <div style={{ background: "#303030" }}>
          <ColorNavbar />

          <Charts
            type={"hybrid"}
            ticker={this.props.ticker}
            buy={this.props.buy}
            data={this.state.data}
          />
        </div>
      );
  }
}

const App = () => {
  const [tickers, setTickers] = useState([]);
  const [ticker, setTicker] = useState("AAPL");
  const [orders, setOrders] = useState({});
  const [favorite, setFavorite] = useState();
  const [buy, setBuy] = useState(true);

  useEffect(() => {
    getOrders()
      .then((res) => {
        setOrders(res);
      })
      .catch((err) => console.log(err));
    getTickers()
      .then((data) => setTickers(data))
      .catch((err) => console.log(err));
  }, []);

  function addToFavoriteTickers(newFavorite) {
    fetch("https://wikinumber.org/store/add", {
      method: "POST",
      crossDomain: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        symbol: newFavorite,
      }),
    }).then((res) => {
      if (res.ok) {
        setTickers([...tickers, newFavorite]);
      }
    });
  }

  function removeFavoriteTicker(oldFavorite) {
    let newFavoritesArray = [];
    for (let i of tickers) {
      if (i === oldFavorite) continue;
      newFavoritesArray.push(i);
    }
    setTickers(newFavoritesArray);
    fetch(`https://wikinumber.org/store/remove/${oldFavorite}`, {
      method: "DELETE",
      crossDomain: true,
      headers: { "Content-Type": "application/json" },
    });
  }

  let xElem = (
    <div>
      <h4>Add/Remove Favorite Tickers</h4>
      <br />
      <input
        placeholder="Ticker to add/remove"
        value={favorite}
        onChange={(e) => setFavorite(e.target.value)}
      />
      <Button
        className="btn-round"
        color="success"
        onClick={() => addToFavoriteTickers(favorite)}
      >
        Add
      </Button>
      <Button
        className="btn-round"
        color="danger"
        onClick={() => removeFavoriteTicker(favorite)}
      >
        Remove
      </Button>
    </div>
  );

  let final = [];
  let buttons = [];
  for (let elt of tickers) {
    final.push(
      <Checkbox name={elt} key={elt} onChange={() => setTicker(elt)}>
        {elt}
      </Checkbox>
    );
    buttons.push(
      <div key={`${elt}_order`} id={elt}>
        <input
          id="buy"
          key={`${elt}_buy`}
          placeholder={orders[elt] === undefined ? 0.0 : orders[elt][0]}
        />
        <input
          id="sell"
          key={`${elt}_sell`}
          placeholder={orders[elt] === undefined ? 0.0 : orders[elt][1]}
        />
        <Button
          className="btn-round"
          color="info"
          key={`${elt}_place_order`}
          onClick={() => {
            const buyPrice = document
              .getElementById(elt)
              .querySelector("#buy").value;
            const sellPrice = document
              .getElementById(elt)
              .querySelector("#sell").value;
            console.log(typeof buyPrice);
            console.log(typeof sellPrice);
            if (buyPrice === "" || sellPrice === "") {
              alert("No values detected");
            } else if (isNaN(Number(buyPrice)) || isNaN(Number(sellPrice))) {
              alert("Please enter valid numbers");
            } else {
              fetch(`https://wikinumber.org/store/order`, {
                crossDomain: true,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  symbol: elt,
                  buy: Number(buyPrice),
                  sell: Number(sellPrice),
                }),
              })
                .then((res) =>
                  alert(
                    `${elt} Order Placed, Buy: ${buyPrice}, Sell: ${sellPrice}`
                  )
                )
                .catch((err) => console.log(err));
            }
          }}
        >
          Send {elt} Order
        </Button>
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(" + require("assets/img/background201.png").default + ")",
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>Choose your Ticker below to display the corresponding chart.</h4>
      <br />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {final}
      </div>

      <br />
      <br />

      <Chart ticker={ticker} buy={buy} />
      <br />
      <br />
      <h4>Click below to choose Buy/Sell Option, then click on the chart.</h4>
      <br />
      <Button
        className="btn-round"
        color="success"
        onClick={() => setBuy(true)}
      >
        {" "}
        Buy{" "}
      </Button>
      <Button
        className="btn-round"
        color="danger"
        onClick={() => setBuy(false)}
      >
        {" "}
        Sell{" "}
      </Button>
      <br />
      <br />

      <br />
      {buttons}

      <br />

      {xElem}
      <br />
      <br />
      <br />
      <FooterAboutUs />
    </div>
  );
};

export default App;
