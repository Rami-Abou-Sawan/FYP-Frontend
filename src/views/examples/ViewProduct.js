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
import ImageView from "components/CustomUpload/ImageView";


function ViewProduct() {
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
                            <ImageView />
                            <br></br><br></br>
                                <h6>Category</h6>
                            <div id="tags-2">
                                <Input
                                  className="border-input"
                                  placeholder="Product category..."
                                  type="text"
                                  disabled
                                />
                              </div>
                              <br></br>
                                <h6>Brand
                              </h6>
                              <div id="tags-2">
                                <Input
                                  className="border-input"
                                  placeholder="Product brand..."
                                  type="text"
                                  disabled
                                />
                              </div>
                              <br></br>
                              <h6>Vendor
                              </h6>
                              <div id="tags-2">
                                <Input
                                  className="border-input"
                                  placeholder="Product vendor..."
                                  type="text"
                                  disabled
                                />
                              </div>
                              <br></br>
                            </Col>
                            <Col md="7" sm="7">
                              <FormGroup>
                                <h6>
                                  Name
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="Product name..."
                                  type="text"
                                  disabled
                                />
                              </FormGroup>
                              <FormGroup>
                                <h6>
                                  Barcode
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="Product barcode..."
                                  type="text"
                                  disabled
                                />
                              </FormGroup>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>
                                    Price
                                  </h6>
                                  <InputGroup className="border-input">
                                    <Input
                                      className="border-input"
                                      defaultValue=""
                                      placeholder="Product price"
                                      type="text"
                                      disabled
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
                                      disabled
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
                                    Stock
                                  </h6>
                                  <InputGroup className="border-input">
                                    <Input
                                      className="border-input"
                                      defaultValue=""
                                      placeholder="Product stock"
                                      type="text"
                                      disabled
                                    />
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
                                      disabled
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
                                  <Input
                                    className="border-input"
                                    placeholder="Product size..."
                                    type="text"
                                    disabled
                                   /> 
                                </Col>
                                <Col md="6">
                                  <h6>Color</h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Product color..."
                                    type="text"
                                    disabled
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
                                  disabled
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="buttons-row" style={{marginTop:"4%"}}>
                            <Col md="12" sm="6">
                              <Button
                                block
                                className="btn-round"
                                color="primary"
                                type="submit"
                                href="/edit-product"
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

export default ViewProduct;
