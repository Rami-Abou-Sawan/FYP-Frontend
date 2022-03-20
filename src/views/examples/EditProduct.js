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


function EditProduct() {
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
                        <Col md="5" sm="5">
                            <h6>Product Image</h6>
                            <ImageUpload />
                            <br></br><br></br>
                                <h6>Category <span className="icon-danger">*</span></h6>
                            <div id="tags-2">
                                <Select 
                                  placeholder={'Mobile'}
                                  options={dataCategory}
                                  styles={customStyles} 
                                />
                              </div>
                              <br></br>
                                <h6>Brand <span className="icon-danger">*</span>
                              </h6>
                              <div id="tags-2">
                                <Select 
                                  placeholder={'Apple'}
                                  options={dataBrand}
                                  styles={customStyles} 
                                />
                              </div>
                              <br></br>
                              <h6>Vendor <span className="icon-danger">*</span>
                              </h6>
                              <div id="tags-2">
                                <Select 
                                  placeholder={'Ali Fakih'}
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
                                  placeholder="Product 1"
                                  type="text"
                                />
                              </FormGroup>
                              <FormGroup>
                                <h6>
                                  Barcode <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="19674885236942"
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
                                      placeholder="100"
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
                                      placeholder="10"
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
                                      placeholder="50"
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
                                      placeholder="25"
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
                                    placeholder={'5\''}
                                    options={dataSize}
                                    styles={customStyles} 
                                  />   
                                </Col>
                                <Col md="6">
                                  <h6>Color</h6>
                                  <Select 
                                    placeholder={'Black'}
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
                                  placeholder="Product description"
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

export default EditProduct;
