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

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';

function PurchaseManagement() {
  const [vTabs, setVTabs] = React.useState("1");
  const dataDriver = [
    { label: "Ali Fakih", value: 1},
    { label: "Ramy Sawan", value: 2}
  ];
  const dataVendor = [
    { label: "Ali Fakih", value: 1},
    { label: "Ramy Sawan", value: 2}
  ];
  const dataProduct = [
    { label: "Product 1", value: 1},
    { label: "Product 2", value: 2}
  ];
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
    document.body.classList.add("vendor-management");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("vendor-management");
    };
  });
  
  return (
    <>
      <DangerNavbar />
      <Container className="tim-container">
        <div id="description-areas" style={{marginTop:"10%"}}>
          <Row>
            <Col md="12" sm="12">
              <h4>
                  <small>Purchase Management</small>
              </h4>
              <Row>
                <Col md="3" sm="4" xs="6">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <Nav
                        className="flex-column nav-stacked"
                        role="tablist"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={vTabs === "1" ? "active" : ""}
                            onClick={() => {
                              setVTabs("1");
                            }}
                          >
                            New purchase
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "2" ? "active" : ""}
                            onClick={() => {
                              setVTabs("2");
                            }}
                          >
                            Edit purchase
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "3" ? "active" : ""}
                            onClick={() => {
                              setVTabs("3");
                            }}
                          >
                            Delete purchase
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "4" ? "active" : ""}
                            onClick={() => {
                              setVTabs("4");
                            }}
                          >
                            View purchase
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col md="9" sm="8" xs="6">
                  <TabContent activeTab={"vTabs" + vTabs}>

                    {/* Add Section */}
                    <TabPane tabId="vTabs1">
                        <Container>
                        <div>
                            <Row>
                                <Col md="12" sm="7">
                                <Row className="price-row">
                                    <Col md="6">
                                    <h6>Purchase Number  <span className="icon-danger">*</span></h6>
                                    <Input
                                        className="border-input"
                                        placeholder="147852369"
                                        type="text"
                                    />
                                    </Col>
                                    <Col md="6">
                                    <h6>Purchase Date  <span className="icon-danger">*</span></h6>                        
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
                                    <Col md="12">
                                    <h6>Channel Type  <span className="icon-danger">*</span></h6>
                                    <Input
                                        className="border-input"
                                        placeholder="Call"
                                        type="text"
                                    />
                                    </Col>
                                </Row>
                                </Col>
                            </Row>
                            <br></br>
                            <Row className="price-row">
                                <Col md="8">
                                    <h6>
                                        Vendor <span className="icon-danger">*</span>
                                    </h6>
                                    <Select 
                                        placeholder={'Vendor'}
                                        options={dataVendor}
                                        styles={customStyles} 
                                    />
                                </Col>
                                <Col md="4" style={{marginTop: "auto", marginBottom: "auto"}}>
                                    <Button
                                        block 
                                        className="btn-round"
                                        color="primary"
                                        type="reset"
                                        href="/vendor-management"
                                    >
                                        New Vendor
                                    </Button>
                                </Col>
                            </Row>
                            <br></br>
                            <Row className="price-row">
                                <Col md="8">
                                    <h6>
                                        Product <span className="icon-danger">*</span>
                                    </h6>
                                    <Select 
                                        placeholder={'Product'}
                                        options={dataProduct}
                                        styles={customStyles} 
                                    /> 
                                </Col>
                                <Col md="4" style={{marginTop: "auto", marginBottom: "auto"}}>
                                    <Button
                                        block
                                        className="btn-round"
                                        color="primary"
                                        type="reset"
                                    >
                                        Add Product
                                    </Button>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                            <Col md="12" sm="7" style={{marginTop:"2%"}}>
                                <h6>
                                    Products
                                </h6>
                                <Table responsive striped>
                                    <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th className="text-center">Product Name</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Stock</th>
                                        <th className="text-center">Available Size</th>
                                        <th className="text-center">Available Color</th>
                                        <th className="text-center">Brand</th>
                                        <th className="text-center">Category</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-center">1</td>
                                        <td className="text-center">Product 1</td>
                                        <td className="text-center">$ 400</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">*</td>
                                        <td className="text-center">Black, White</td>
                                        <td className="text-center">Apple</td>
                                        <td className="text-center">Airpods</td>
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
                                        <td className="text-center">1</td>
                                        <td className="text-center">Product 2</td>
                                        <td className="text-center">$ 25</td>
                                        <td className="text-center">100</td>
                                        <td className="text-center">5' 7.5'</td>
                                        <td className="text-center">Red, Pink</td>
                                        <td className="text-center">Apple</td>
                                        <td className="text-center">Cover</td>
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
                      </TabPane>
                      
                      {/* Edit Section */}
                      <TabPane tabId="vTabs2">
                        <Container>
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Purchase Number</th>
                                <th className="text-center">Purchase Date</th>
                                <th className="text-center">Shipped</th>
                                <th className="text-center">Vendor</th>
                                <th className="text-center">Ordered via</th>
                                <th className="text-center">Total</th>
                                <th className="text-center">Tracking URL</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td className="text-center">Purchase 1</td>
                                <td className="text-center">21 / 05 / 2021</td>
                                <td className="text-center">Yes</td>
                                <td className="text-center">Ali Fakih</td>
                                <td className="text-center">Call</td>
                                <td className="text-center">$ 100</td>
                                <td className="text-center"><a href="https://www.google.com" target="_blank">example.com</a></td>
                                <td className="td-actions text-center">
                                  <Button
                                    className="btn-link mr-1"
                                    color="info"
                                    data-toggle="tooltip"
                                    id="tooltip542628903"
                                    size="sm"
                                    type="button"
                                    href="/edit-purchase"
                                  >
                                    <i className="fa fa-edit" />
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">2</td>
                                <td className="text-center">Purchase 2</td>
                                <td className="text-center">21 / 05 / 2021</td>
                                <td className="text-center">No</td>
                                <td className="text-center">Ramy Sawan</td>
                                <td className="text-center">Whatsapp</td>
                                <td className="text-center">$ 100</td>
                                <td className="text-center"><a href="https://www.google.com" target="_blank">example.com</a></td>
                                <td className="td-actions text-center">
                                  <Button
                                    className="btn-link mr-1"
                                    color="info"
                                    data-toggle="tooltip"
                                    id="tooltip542628903"
                                    size="sm"
                                    type="button"
                                    href="/edit-purchase"
                                  >
                                    <i className="fa fa-edit" />
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Container>
                      </TabPane>

                      {/* Delete Section */}
                      <TabPane tabId="vTabs3">
                        <Container>
                          <Table responsive striped>
                            <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th/>
                                    <th className="text-center">Purchase Number</th>
                                    <th className="text-center">Purchase Date</th>
                                    <th className="text-center">Shipped</th>
                                    <th className="text-center">Vendor</th>
                                    <th className="text-center">Ordered via</th>
                                    <th className="text-center">Total</th>
                                    <th className="text-center">Tracking URL</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td>
                                        <FormGroup check>
                                            <Label check>
                                            <Input
                                                defaultValue=""
                                                type="checkbox"
                                            />
                                            <span className="form-check-sign" />
                                            </Label>
                                        </FormGroup>
                                    </td> 
                                    <td className="text-center">Purchase 1</td>
                                    <td className="text-center">21 / 05 / 2021</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Ali Fakih</td>
                                    <td className="text-center">Call</td>
                                    <td className="text-center">$ 100</td>
                                    <td className="text-center"><a href="https://www.google.com" target="_blank">example.com</a></td>
                                    <td className="td-actions text-center">
                                    <Button
                                        className="btn-link mr-1"
                                        color="danger"
                                        data-toggle="tooltip"
                                        id="tooltip542628903"
                                        size="sm"
                                        type="button"
                                        onClick={handleClickOpen}
                                    >
                                        <i className="fa fa-remove" />
                                    </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td>
                                        <FormGroup check>
                                            <Label check>
                                            <Input
                                                defaultValue=""
                                                type="checkbox"
                                            />
                                            <span className="form-check-sign" />
                                            </Label>
                                        </FormGroup>
                                    </td> 
                                    <td className="text-center">Purchase 2</td>
                                    <td className="text-center">21 / 05 / 2021</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Ali Fakih</td>
                                    <td className="text-center">Call</td>
                                    <td className="text-center">$ 100</td>
                                    <td className="text-center"><a href="https://www.google.com" target="_blank">example.com</a></td>
                                    <td className="td-actions text-center">
                                    <Button
                                        className="btn-link mr-1"
                                        color="danger"
                                        data-toggle="tooltip"
                                        id="tooltip542628903"
                                        size="sm"
                                        type="button"
                                        onClick={handleClickOpen}
                                    >
                                        <i className="fa fa-remove" />
                                    </Button>
                                    </td>
                                </tr>
                            </tbody>
                          </Table>
                          <Button color="danger" outline type="button" className="mr-1"  onClick={handleClickOpen}>
                            Delete selected purchase
                          </Button>
                          <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>
                              Delete Purchase ?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Are you sure you want to delete selected purchase
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose} color="default" autoFocus>
                              Cancel
                              </Button>
                              <Button onClick={handleClose} color="danger">
                              Delete
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Container>
                      </TabPane>

                      {/* View Section */}
                      <TabPane tabId="vTabs4">
                        <Container>
                          <Table responsive striped>
                            <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th className="text-center">Purchase Number</th>
                                    <th className="text-center">Purchase Date</th>
                                    <th className="text-center">Shipped</th>
                                    <th className="text-center">Vendor</th>
                                    <th className="text-center">Ordered via</th>
                                    <th className="text-center">Total</th>
                                    <th className="text-center">Tracking URL</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td className="text-center">Purchase 1</td>
                                    <td className="text-center">21 / 05 / 2021</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Ali Fakih</td>
                                    <td className="text-center">Call</td>
                                    <td className="text-center">$ 100</td>
                                    <td className="text-center"><a href="https://www.google.com" target="_blank">example.com</a></td>
                                    <td className="td-actions text-center">
                                    <Button
                                        className="btn-link mr-1"
                                        color="info"
                                        data-toggle="tooltip"
                                        id="tooltip542628903"
                                        size="sm"
                                        type="button"
                                        href="/view-purchase"
                                    >
                                        <i className="fa fa-eye" />
                                    </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td className="text-center">Purchase 2</td>
                                    <td className="text-center">21 / 05 / 2021</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Ali Fakih</td>
                                    <td className="text-center">Call</td>
                                    <td className="text-center">$ 100</td>
                                    <td className="text-center"><a href="https://www.google.com" target="_blank">example.com</a></td>
                                    <td className="td-actions text-center">
                                    <Button
                                        className="btn-link mr-1"
                                        color="info"
                                        data-toggle="tooltip"
                                        id="tooltip542628903"
                                        size="sm"
                                        type="button"
                                        href="/view-purchase"
                                    >
                                        <i className="fa fa-eye" />
                                    </Button>
                                    </td>
                                </tr>
                            </tbody>
                          </Table>
                        </Container>
                      </TabPane>
                  </TabContent>
                </Col>
              </Row>
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

export default PurchaseManagement;
