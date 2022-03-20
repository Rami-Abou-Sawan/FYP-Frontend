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

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';


function ProductManagement() {
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
              <h4>
                  <small>Product Management</small>
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
                            New product
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "2" ? "active" : ""}
                            onClick={() => {
                              setVTabs("2");
                            }}
                          >
                            Edit product
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "3" ? "active" : ""}
                            onClick={() => {
                              setVTabs("3");
                            }}
                          >
                            Delete product
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "4" ? "active" : ""}
                            onClick={() => {
                              setVTabs("4");
                            }}
                          >
                            View product
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
                            <Col md="5" sm="5">
                              <h6>Product Image</h6>
                              <ImageUpload />
                              <br></br><br></br>
                                <h6>Category <span className="icon-danger">*</span>
                              </h6>
                              <div id="tags-2">
                                <Select 
                                  placeholder={'Category'}
                                  options={dataCategory}
                                  styles={customStyles} 
                                />
                              </div>
                              <br></br>
                                <h6>Brand <span className="icon-danger">*</span>
                              </h6>
                              <div id="tags-2">
                                <Select 
                                  placeholder={'Brand'}
                                  options={dataBrand}
                                  styles={customStyles} 
                                />
                              </div>
                              <br></br>
                              <h6>Vendor <span className="icon-danger">*</span>
                              </h6>
                              <div id="tags-2">
                                <Select 
                                  placeholder={'Vendor'}
                                  options={dataVendor}
                                  styles={customStyles} 
                                />
                              </div>
                              <br></br>
                            </Col>
                            <Col md="7" sm="7">
                              <FormGroup>
                                <h6>
                                  Name <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="Product name..."
                                  type="text"
                                />
                              </FormGroup>
                              <FormGroup>
                                <h6>
                                  Barcode <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="Product barcode..."
                                  type="text"
                                />
                              </FormGroup>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>
                                    Price <span className="icon-danger">*</span>
                                  </h6>
                                  <InputGroup className="border-input">
                                    <Input
                                      className="border-input"
                                      defaultValue=""
                                      placeholder="Product price"
                                      type="text"
                                    />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>
                                        <i className="fa fa-dollar" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                                <Col md="6">
                                  <h6>Discount</h6>
                                  <InputGroup className="border-input">
                                    <Input
                                      className="border-input"
                                      defaultValue=""
                                      placeholder="Product discount"
                                      type="text"
                                    />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>%</InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                              </Row>
                              <br></br>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>
                                    Stock <span className="icon-danger">*</span>
                                  </h6>
                                  <InputGroup className="border-input">
                                    <Input
                                      className="border-input"
                                      defaultValue=""
                                      placeholder="Product stock"
                                      type="text"
                                    />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>
                                        
                                      </InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                                <Col md="6">
                                  <h6>Weight</h6>
                                  <InputGroup className="border-input">
                                    <Input
                                      className="border-input"
                                      defaultValue=""
                                      placeholder="Product weight"
                                      type="text"
                                    />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>gr</InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                              </Row>
                              <br></br>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>Size</h6>
                                  <Select 
                                    placeholder={'Product size'}
                                    options={dataSize}
                                    styles={customStyles} 
                                  />   
                                </Col>
                                <Col md="6">
                                  <h6>Color</h6>
                                  <Select 
                                    placeholder={'Product color'}
                                    options={dataColor}
                                    styles={customStyles} 
                                  /> 
                                </Col>
                              </Row>
                              <br></br>
                              <FormGroup>
                                <h6>Description</h6>
                                <Input
                                  className="textarea-limited"
                                  maxLength="150"
                                  placeholder="This is a textarea limited to 150 characters."
                                  rows="8"
                                  type="textarea"
                                />
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" />
                                  Display on landing page{" "}
                                  <span className="form-check-sign" />
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="buttons-row" style={{marginTop:"4%"}}>
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
                                Save &amp; Publish
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
                                <th className="text-center">Product Name</th>
                                <th className="text-center">Brand</th>
                                <th className="text-center">Qty</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Discount</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">1</td>
                                <td className="text-center">Product 1</td>
                                <td className="text-center">Apple</td>
                                <td className="text-center">25</td>
                                <td className="text-center">€ 49</td>
                                <td className="text-center">10%</td>
                                <td className="td-actions text-center">
                                  <Button
                                    className="btn-link mr-1"
                                    color="info"
                                    data-toggle="tooltip"
                                    id="tooltip542628903"
                                    size="sm"
                                    type="button"
                                    href="/edit-product"
                                  >
                                    <i className="fa fa-edit" />
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">2</td>
                                <td className="text-center">Product 2</td>
                                <td className="text-center">Samsung</td>
                                <td className="text-center">50</td>
                                <td className="text-center">€ 10.99</td>
                                <td className="text-center">5%</td>
                                <td className="td-actions text-center">
                                  <Button
                                    className="btn-link mr-1"
                                    color="info"
                                    data-toggle="tooltip"
                                    id="tooltip542628903"
                                    size="sm"
                                    type="button"
                                    href="/edit-product"
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
                                <th />
                                <th className="text-center">Product Name</th>
                                <th className="text-center">Brand</th>
                                <th className="text-center">Qty</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Discount</th>
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
                                <td className="text-center">Product 1</td>
                                <td className="text-center">Apple</td>
                                <td className="text-center">25</td>
                                <td className="text-center">€ 49</td>
                                <td className="text-center">10%</td>
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
                                        defaultChecked
                                        defaultValue=""
                                        type="checkbox"
                                      />
                                      <span className="form-check-sign" />
                                    </Label>
                                  </FormGroup>
                                </td>
                                <td className="text-center">Product 2</td>
                                <td className="text-center">Samsung</td>
                                <td className="text-center">50</td>
                                <td className="text-center">€ 10.99</td>
                                <td className="text-center">5%</td>
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
                          <Button color="danger" outline type="button" className="mr-1" onClick={handleClickOpen}>
                            Delete selected product
                          </Button>
                          <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>
                              Delete Product ?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Are you sure you want to delete selected product
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
                                <th className="text-center">Product Name</th>
                                <th className="text-center">Brand</th>
                                <th className="text-center">Qty</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Discount</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">1</td>
                                <td className="text-center">Product 1</td>
                                <td className="text-center">Apple</td>
                                <td className="text-center">25</td>
                                <td className="text-center">€ 49</td>
                                <td className="text-center">10%</td>
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
                                <td className="text-center">Samsung</td>
                                <td className="text-center">50</td>
                                <td className="text-center">€ 10.99</td>
                                <td className="text-center">5%</td>
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

export default ProductManagement;
