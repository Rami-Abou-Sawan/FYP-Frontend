import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import ContactUs from "views/examples/ContactUs.js";
import Chart from "views/examples/Chart.js";
import FavoriteTickers from "views/examples/favoriteTickers.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />

      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />

      <Route path="/charts" render={(props) => <Chart {...props} />} />

      <Route
        path="/fav-tickers"
        render={(props) => <FavoriteTickers {...props} />}
      />

      <Redirect to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
