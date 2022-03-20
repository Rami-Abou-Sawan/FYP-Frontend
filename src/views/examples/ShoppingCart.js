import React from "react";
// plugin that creates slider
import Slider from "nouislider";

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
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import EcommerceHeader from "components/Headers/EcommerceHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";
import ContactUsHeader from "components/Headers/ContactUsHeader";
import ColorNavbarCart from "components/Navbars/ColorNavbarCart";

function ShoppingCart() {
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
      <div className="wrapper" style={{ marginTop: "5%" }}>
        <Row>
          <Col md="12">
            <h4 className="title" style={{ marginLeft: "5%" }}>
              Shopping Cart
            </h4>
          </Col>
          <Col className="ml-auto mr-auto" md="10">
            <Table className="table-shopping" responsive>
              <thead>
                <tr>
                  <th className="text-center" />
                  <th />
                  <th className="text-right">Price</th>
                  <th className="text-right">Quantity</th>
                  <th className="text-right">Total</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="img-container">
                      <img
                        alt="..."
                        src={require("assets/img/tables/agenda.png").default}
                      />
                    </div>
                  </td>
                  <td className="td-product">
                    <strong>Get Shit Done Notebook</strong>
                    <p>
                      Most beautiful agenda for the office, really nice paper
                      and black cover. Most beautiful agenda for the office.
                    </p>
                  </td>
                  <td className="td-price">
                    <small>€</small>
                    49
                  </td>
                  <td className="td-number td-quantity">
                    1{" "}
                    <ButtonGroup>
                      <Button
                        className="btn-border btn-round"
                        color="default"
                        size="sm"
                      >
                        -
                      </Button>
                      <Button
                        className="btn-border btn-round"
                        color="default"
                        size="sm"
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td className="td-number">
                    <small>€</small>
                    49
                  </td>
                  <td className="td-actions text-center">
                    <Button
                      className="btn-link mr-1"
                      color="danger"
                      data-toggle="tooltip"
                      id="tooltip542628903"
                      size="sm"
                      type="button"
                    >
                      <i className="fa fa-remove" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-container">
                      <img
                        alt="..."
                        src={require("assets/img/tables/stylus.jpg").default}
                      />
                    </div>
                  </td>
                  <td className="td-product">
                    <strong>Stylus</strong>
                    <p>
                      Design is not just what it looks like and feels like.
                      Design is how it works.
                    </p>
                  </td>
                  <td className="td-price">
                    <small>€</small>
                    499
                  </td>
                  <td className="td-number td-quantity">
                    2{" "}
                    <ButtonGroup>
                      <Button
                        className="btn-border btn-round"
                        color="default"
                        size="sm"
                      >
                        -
                      </Button>
                      <Button
                        className="btn-border btn-round"
                        color="default"
                        size="sm"
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td className="td-number">
                    <small>€</small>
                    998
                  </td>
                  <td className="td-actions text-center">
                    <Button
                      className="btn-link mr-1"
                      color="danger"
                      data-toggle="tooltip"
                      id="tooltip542628903"
                      size="sm"
                      type="button"
                    >
                      <i className="fa fa-remove" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-container">
                      <img
                        alt="..."
                        src={require("assets/img/tables/evernote.png").default}
                      />
                    </div>
                  </td>
                  <td className="td-product">
                    <strong>Evernote iPad Stander</strong>
                    <p>
                      A groundbreaking Retina display. All-flash architecture.
                      Fourth-generation Intel processors.
                    </p>
                  </td>
                  <td className="td-price">
                    <small>€</small>
                    799
                  </td>
                  <td className="td-number td-quantity">
                    1{" "}
                    <ButtonGroup>
                      <Button
                        className="btn-border btn-round"
                        color="default"
                        size="sm"
                      >
                        -
                      </Button>
                      <Button
                        className="btn-border btn-round"
                        color="default"
                        size="sm"
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td className="td-number">
                    <small>€</small>
                    799
                  </td>
                  <td className="td-actions text-center">
                    <Button
                      className="btn-link mr-1"
                      color="danger"
                      data-toggle="tooltip"
                      id="tooltip542628903"
                      size="sm"
                      type="button"
                    >
                      <i className="fa fa-remove" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" />
                  <td />
                  <td className="td-total">Total</td>
                  <td className="td-total">
                    <small>€</small>
                    12,999
                  </td>
                  <td></td>
                </tr>
                <tr className="tr-actions">
                  <td className="text-right">
                    <Button
                      color="danger"
                      size="lg"
                      type="button"
                      href="/e-commerce"
                    >
                      <i className="fa fa-chevron-left" /> Back To Shop
                    </Button>
                  </td>
                  <td colSpan="2" />
                  <td className="text-right" colSpan="3">
                    <Button
                      color="primary"
                      size="lg"
                      type="button"
                      href="/order-final"
                    >
                      Complete Purchase <i className="fa fa-chevron-right" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <FooterAboutUs />
      </div>
    </>
  );
}

export default ShoppingCart;
