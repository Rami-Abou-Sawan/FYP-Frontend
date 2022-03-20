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

import ImageUpload from "components/CustomUpload/ImageUpload.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";
import DangerNavbar from "components/Navbars/DangerNavbar";
import ReactDatetimeClass from "react-datetime";


function EditOrder() {
  const [categories, setCategories] = React.useState(["Food", " Drink"]);
  const [vTabs, setVTabs] = React.useState("1");

  const dataDriver = [
    { label: "Ali Fakih", value: 1},
    { label: "Ramy Sawan", value: 2}
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
                                    <FormGroup>
                                        <InputGroup className="date" id="datetimepicker">
                                            <ReactDatetimeClass
                                            inputProps={{
                                                className: "form-control",
                                                placeholder: "05/21/2021 13:00",
                                            }}
                                            />
                                            <InputGroupAddon addonType="append">
                                            <InputGroupText>
                                                <span className="glyphicon glyphicon-calendar">
                                                <i className="fa fa-calendar" />
                                                </span>
                                            </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                              </Row>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>Transaction Status  <span className="icon-danger">*</span></h6>
                                  <Input
                                    className="border-input"
                                    placeholder="In transit"
                                    type="text"
                                  />
                                </Col>
                                <Col md="6">
                                  <h6>Shipped  <span className="icon-danger">*</span></h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Yes"
                                    type="text"
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
                                            placeholder="Shipment number..."
                                            type="text"
                                    />
                                    </Col>
                                    <Col md="6">
                                    <h6>
                                        Promised Delivery Date <span className="icon-danger">*</span>
                                    </h6>
                                    <FormGroup>
                                        <InputGroup className="date" id="datetimepicker">
                                            <ReactDatetimeClass
                                            inputProps={{
                                                className: "form-control",
                                                placeholder: "Promised delivery date...",
                                            }}
                                            />
                                            <InputGroupAddon addonType="append">
                                            <InputGroupText>
                                                <span className="glyphicon glyphicon-calendar">
                                                <i className="fa fa-calendar" />
                                                </span>
                                            </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="price-row">
                                    <Col md="6">
                                    <h6>Actual Delivery Date  <span className="icon-danger">*</span></h6>
                                        <FormGroup>
                                            <InputGroup className="date" id="datetimepicker">
                                                <ReactDatetimeClass
                                                inputProps={{
                                                    className: "form-control",
                                                    placeholder: "Actual delivery date...",
                                                }}
                                                />
                                                <InputGroupAddon addonType="append">
                                                <InputGroupText>
                                                    <span className="glyphicon glyphicon-calendar">
                                                    <i className="fa fa-calendar" />
                                                    </span>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Shipping Provider <span className="icon-danger">*</span>
                                        </h6>
                                    <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="Shipment number..."
                                            type="text"
                                        />
                                    </Col>
                                </Row>
                                <Row className="price-row">
                                    <Col md="6">
                                        <h6>Shipping Method  <span className="icon-danger">*</span></h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="Shipment method..."
                                            type="text"
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
                                            placeholder="Shipping cost"
                                            type="text"
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
                                            placeholder="Shipment status..."
                                            type="text"
                                        />
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Sent To Shipping Provider <span className="icon-danger">*</span>
                                        </h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="Sent to shipping provider..."
                                            type="text"
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
                                            placeholder="Due amount paid"
                                            type="text"
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
                                        <Select 
                                            placeholder={'Driver'}
                                            options={dataDriver}
                                            styles={customStyles} 
                                        /> 
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="price-row">
                                    <Col md="6">
                                        <h6>Date Driver Left  <span className="icon-danger">*</span></h6>
                                        <FormGroup>
                                            <InputGroup className="date" id="datetimepicker">
                                                <ReactDatetimeClass
                                                inputProps={{
                                                    className: "form-control",
                                                    placeholder: "Date driver left...",
                                                }}
                                                />
                                                <InputGroupAddon addonType="append">
                                                <InputGroupText>
                                                    <span className="glyphicon glyphicon-calendar">
                                                    <i className="fa fa-calendar" />
                                                    </span>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Date Driver Returned <span className="icon-danger">*</span>
                                        </h6>
                                        <FormGroup>
                                            <InputGroup className="date" id="datetimepicker">
                                                <ReactDatetimeClass
                                                inputProps={{
                                                    className: "form-control",
                                                    placeholder: "Date driver returned...",
                                                }}
                                                />
                                                <InputGroupAddon addonType="append">
                                                <InputGroupText>
                                                    <span className="glyphicon glyphicon-calendar">
                                                    <i className="fa fa-calendar" />
                                                    </span>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="price-row">
                                    <Col md="6">
                                        <h6>Tracking URL  <span className="icon-danger">*</span></h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="Tracking url..."
                                            type="text"
                                        />
                                    </Col>
                                    <Col md="6">
                                        <h6>
                                            Tracking Number <span className="icon-danger">*</span>
                                        </h6>
                                        <Input
                                            className="border-input"
                                            defaultValue=""
                                            placeholder="Tracking number..."
                                            type="text"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="buttons-row" style={{marginTop:"7.5%"}}>
                            <Col md="6" sm="6">
                              <Button
                                block
                                className="btn-round"
                                color="danger"
                                outline
                                type="reset"
                              >
                                Cancel
                              </Button>
                            </Col>
                            <Col md="6" sm="6">
                              <Button
                                block
                                className="btn-round"
                                color="primary"
                                type="submit"
                              >
                                Save
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

export default EditOrder;
