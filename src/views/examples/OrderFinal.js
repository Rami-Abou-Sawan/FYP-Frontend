import React from "react";
// plugin that creates slider
import Slider from "nouislider";
import OrderFinalMain from './OrderFinalMain';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Collapse,
  Label,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  ButtonGroup,
  Table,
} from "reactstrap";

// core components
import FooterAboutUs from "components/Footers/FooterAboutUs";
import ColorNavbarCart from "components/Navbars/ColorNavbarCart";

function OrderFinal() {
  // states for collapses
  const [priceRange, setPriceRange] = React.useState(true);
  const [clothing, setClothing] = React.useState(false);
  const [designer, setDesigner] = React.useState(false);
  const [color, setColor] = React.useState(false);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("ecommerce-page");
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
    };
  });
  return (
    <>
      <ColorNavbarCart />
      <div className="wrapper" style={{marginTop:"5%"}}>
        <Row>
          <Col md="12">
            <h4 className="title" style={{marginLeft:"5%"}}>Complete Purchase</h4>
          </Col>
          <Col className="ml-auto mr-auto" md="10">
            <OrderFinalMain/>
          </Col>
        </Row>
          <div className="main">
            <div className="section"></div>
          </div>
        <FooterAboutUs />
      </div>
    </>
  );
}

export default OrderFinal;
