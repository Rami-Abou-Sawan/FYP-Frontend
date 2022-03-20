import React from "react";
import Select from 'react-select';
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

// core components

import FooterAboutUs from "components/Footers/FooterAboutUs";
import DangerNavbar from "components/Navbars/DangerNavbar";
import ReactDatetimeClass from "react-datetime";


function ViewOrder() {
  const [categories, setCategories] = React.useState(["Food", " Drink"]);
  const [vTabs, setVTabs] = React.useState("1");
  const dataCategory = [
    { label: "Mobile", value: 1},
    { label: "Laptops", value: 2},
    { label: "Accessories", value: 3}
  ];
  const dataBrand = [
    { label: "Apple", value: 1},
    { label: "Samsung", value: 2}
  ];
  const dataVendor = [
    { label: "Ali Fakih", value: 1},
    { label: "Ramy Sawan", value: 2}
  ];
  const dataSize = [
    { label: "5'", value: 1},
    { label: "7.5'", value: 2}
  ];
  const dataColor = [
    { label: "Black", value: 1},
    { label: "White", value: 2},
    { label: "Red", value: 3}
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      
      color: state.isSelected ? 'black' : 'black',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  }
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("product-management");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("product-management");
    };
  });
  
  return (
    <>
      <DangerNavbar />
      <Container className="tim-container">
        <div id="description-areas" style={{marginTop:"10%"}}>
          <Row>
            <Col md="12" sm="12">
            <Container>
                    <div>
                        <Row>
                            <Col md="12" sm="7">
                            <Row className="price-row">
                                <Col md="6">
                                  <h6>Order Number  <span className="icon-danger">*</span></h6>
                                  <Input
                                    className="border-input"
                                    placeholder="147852369"
                                    type="text"
                                    disabled
                                  />
                                </Col>
                                <Col md="6">
                                  <h6>Order Date  <span className="icon-danger">*</span></h6>                        
                                    <Input
                                      className="border-input"
                                      placeholder="05/21/2021 12:00"
                                      type="text"
                                      disabled
                                    />
                                </Col>
                              </Row>
                              <br></br>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>Transaction Status  <span className="icon-danger">*</span></h6>
                                  <Input
                                    className="border-input"
                                    placeholder="In transit"
                                    type="text"
                                    disabled
                                  />
                                </Col>
                                <Col md="6">
                                  <h6>Shipped  <span className="icon-danger">*</span></h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Yes"
                                    type="text"
                                    disabled
                                  />
                                </Col>
                              </Row>
                              <br></br>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>Channel Type  <span className="icon-danger">*</span></h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Call"
                                    type="text"
                                    disabled
                                  />
                                </Col>
                                <Col md="6">
                                  <h6>
                                    Payment Type <span className="icon-danger">*</span>
                                  </h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Cash"
                                    type="text"
                                    disabled
                                  />
                                </Col>
                              </Row>
                              <br></br>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>Payment Amount  <span className="icon-danger">*</span></h6>
                                  <InputGroup className="border-input">
                                    <Input
                                      className="border-input"
                                      defaultValue=""
                                      placeholder="100"
                                      type="text"
                                      disabled
                                    />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>$</InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                                <Col md="6">
                                  <h6>
                                    Paid <span className="icon-danger">*</span>
                                  </h6>
                                  <Input
                                    className="border-input"
                                    placeholder="No"
                                    type="text"
                                    disabled
                                  />
                                </Col>
                              </Row>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md="12" sm="7" style={{marginTop:"2%"}}>
                                <h6>
                                    Customer
                                </h6>
                                <Table responsive striped>
                                    <thead>
                                        <tr>
                                            <th className="text-center">#</th>
                                            <th className="text-center">Customer name</th>
                                            <th className="text-center">Phone Number</th>
                                            <th className="text-center">Email</th>
                                            <th className="text-center">Address</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-center">1</td>
                                        <td className="text-center">Ali Fakih</td>
                                        <td className="text-center">03 123456</td>
                                        <td className="text-center">fakih.ali33@outlook.com</td>
                                        <td className="text-center">Mazraa, Beirut, Lebanon</td>
                                        <td className="td-actions text-center">
                                        <Button
                                            className="btn-link mr-1"
                                            color="info"
                                            data-toggle="tooltip"
                                            id="tooltip542628903"
                                            size="sm"
                                            type="button"
                                            href="/view-customer"
                                        >
                                            <i className="fa fa-eye" />
                                        </Button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md="12" sm="7" style={{marginTop:"2%"}}>
                                <h6>
                                    Order Details
                                </h6>
                                <Table responsive striped>
                                    <thead>
                                        <tr>
                                            <th className="text-center">#</th>
                                            <th className="text-center">Product name</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Qty</th>
                                            <th className="text-center">Discount</th>
                                            <th className="text-center">Tax</th>
                                            <th className="text-center">Amount</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-center">1</td>
                                        <td className="text-center">Product 1</td>
                                        <td className="text-center">$ 25</td>
                                        <td className="text-center">2</td>
                                        <td className="text-center">10%</td>
                                        <td className="text-center">10%</td>
                                        <td className="text-center">$ 50</td>
                                        <td className="td-actions text-center">
                                        <Button
                                            className="btn-link mr-1"
                                            color="info"
                                            data-toggle="tooltip"
                                            id="tooltip542628903"
                                            size="sm"
                                            type="button"
                                            href="/view-product"
                                        >
                                            <i className="fa fa-eye" />
                                        </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">2</td>
                                        <td className="text-center">Product 2</td>
                                        <td className="text-center">$ 10</td>
                                        <td className="text-center">1</td>
                                        <td className="text-center">0%</td>
                                        <td className="text-center">10%</td>
                                        <td className="text-center">$ 11</td>
                                        <td className="td-actions text-center">
                                        <Button
                                            className="btn-link mr-1"
                                            color="info"
                                            data-toggle="tooltip"
                                            id="tooltip542628903"
                                            size="sm"
                                            type="button"
                                            href="/view-product"
                                        >
                                            <i className="fa fa-eye" />
                                        </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="5" />
                                        <td className="text-center td-total">Total</td>
                                        <td className="text-center td-price">
                                        <small>$ </small>
                                        61
                                        </td>
                                        <td className="text-center"></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" sm="7" style={{marginTop:"2%"}}>
                                <Row className="price-row">
                                    <Col md="6">
                                      <h6>Shipment Number  <span className="icon-danger">*</span></h6>
                                      <Input
                                        className="border-input"
                                        defaultValue=""
                                        placeholder="147852369"
                                        type="text"
                                        disabled
                                      />
                                    </Col>
                                    <Col md="6">
                                      <h6>
                                          Promised Delivery Date <span className="icon-danger">*</span>
                                      </h6>
                                      <Input
                                        className="border-input"
                                        defaultValue=""
                                        placeholder="05/23/2021 15:00"
                                        type="text"
                                        disabled
                                      />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="price-row">
                                    <Col md="6">
                                    <h6>Actual Delivery Date  <span className="icon-danger">*</span></h6>
                                    <Input
                                        className="border-input"
                                        defaultValue=""
                                        placeholder="05/21/2021 12:00"
                                        type="text"
                                        disabled
                                      />
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Shipping Provider <span className="icon-danger">*</span>
                                        </h6>
                                        <Input
                                          className="border-input"
                                          defaultValue=""
                                          placeholder="XYZ"
                                          type="text"
                                          disabled
                                      />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="price-row">
                                    <Col md="6">
                                        <h6>Shipping Method  <span className="icon-danger">*</span></h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="XYZ"
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Shipping Cost <span className="icon-danger">*</span>
                                        </h6>
                                        <InputGroup className="border-input">
                                          <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="100"
                                            type="text"
                                            disabled
                                          />
                                          <InputGroupAddon addonType="append">
                                            <InputGroupText>$</InputGroupText>
                                          </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="price-row">
                                    <Col md="6">
                                        <h6>Shipping Status  <span className="icon-danger">*</span></h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="XYZ"
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Sent To Shipping Provider <span className="icon-danger">*</span>
                                        </h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="Yes"
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="price-row">
                                    <Col md="6">
                                        <h6>Due Amount Paid  <span className="icon-danger">*</span></h6>
                                        <InputGroup className="border-input">
                                          <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="10"
                                            type="text"
                                            disabled
                                          />
                                          <InputGroupAddon addonType="append">
                                            <InputGroupText>$</InputGroupText>
                                          </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Driver <span className="icon-danger">*</span>
                                        </h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="Ali Fakih"
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="price-row">
                                    <Col md="6">
                                        <h6>Date Driver Left  <span className="icon-danger">*</span></h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="05/22/2021 12:00"
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Date Driver Returned <span className="icon-danger">*</span>
                                        </h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="05/24/2021 12:00"
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="price-row">
                                    <Col md="6">
                                        <h6>Tracking URL  <span className="icon-danger">*</span></h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="example.com"
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Tracking Number <span className="icon-danger">*</span>
                                        </h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="147852369"
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="buttons-row" style={{marginTop:"4%"}}>
                            <Col md="12" sm="6">
                              <Button
                                block
                                className="btn-round"
                                color="primary"
                                type="submit"
                                href="/edit-order"
                              >
                                Edit
                              </Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Col>
          </Row>
        </div>
        </Container>

      <div className="main">
        <div className="section">
          
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default ViewOrder;
