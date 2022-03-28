import React from "react";
import { render } from "react-dom";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";
import ActiveStocksHeader from "components/Headers/ActiveStocksHeader.js";
import Charts from "components/Charts/Charts.js";
import { getData } from "utils.js";

//import { TypeChooser } from "react-stockcharts/lib/helper";

class Chart extends React.Component {
  componentDidMount() {
    getData().then((data) => this.setState({ data }));
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <div style={{ background: "#303030" }}>
        <ColorNavbar />
        <ActiveStocksHeader />
        <Charts type={"hybrid"} data={this.state.data} />
        <FooterAboutUs />
      </div>
    );
  }
}

export default Chart;

/**			<TypeChooser style={{background: "#303030", fontColor: "#707070"}}>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser> */
