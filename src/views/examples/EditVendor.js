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


function EditVendor() {
  const [categories, setCategories] = React.useState(["Food", " Drink"]);
  const [vTabs, setVTabs] = React.useState("1");
  const dataCity = [
    { label: "Mazraa", value: 1},
    { label: "Hamra", value: 2}
  ];
  const dataState = [
    { label: "Beirut", value: 1},
    { label: "Baabda", value: 2}
  ];
  const dataCountry = [
    { label: "Lebanon", value: 1},
    { label: "Turkey", value: 2}
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
                              <FormGroup>
                                <h6>
                                  Name <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="Ali Fakih"
                                  type="text"
                                />
                              </FormGroup>
                              <FormGroup>
                                <h6>
                                  Address <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="Vendor address..."
                                  type="text"
                                />
                              </FormGroup>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>City  <span className="icon-danger">*</span></h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Vendor city..."
                                    type="text"
                                  />
                                  {/* <Select 
                                    placeholder={'City'}
                                    options={dataCity}
                                    styles={customStyles} 
                                  />    */}
                                </Col>
                                <Col md="6">
                                  <h6>State  <span className="icon-danger">*</span></h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Vendor state..."
                                    type="text"
                                  />
                                  {/* <Select 
                                    placeholder={'State'}
                                    options={dataState}
                                    styles={customStyles} 
                                  />  */}
                                </Col>
                              </Row>
                              <br></br>
                              <Row className="price-row">
                                <Col md="6">
                                  <h6>Country  <span className="icon-danger">*</span></h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Vendor country..."
                                    type="text"
                                  />
                                  {/* <Select 
                                    placeholder={'Country'}
                                    options={dataCountry}
                                    styles={customStyles} 
                                  />  */}
                                </Col>
                                <Col md="6">
                                  <h6>
                                    Postal Code <span className="icon-danger">*</span>
                                  </h6>
                                  <InputGroup className="border-input">
                                    <Input
                                      className="border-input"
                                      defaultValue=""
                                      placeholder="Postal code..."
                                      type="text"
                                    />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>
                                      </InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                              </Row>
                              <br></br>
                              <FormGroup>
                                <h6>Additionnal Description</h6>
                                <Input
                                  className="textarea-limited"
                                  maxLength="150"
                                  placeholder="This is a textarea limited to 150 characters."
                                  rows="8"
                                  type="textarea"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="buttons-row">
                            <Col md="4" sm="4">
                              <Button
                                block
                                className="btn-round"
                                color="primary"
                                type="submit"
                              >
                                New Address
                              </Button>
                            </Col>
                            </Row>
                            <Row>
                                <Col md="12" sm="7" style={{marginTop:"2%"}}>
                                <Table responsive striped>
                                    <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th className="text-center">Address</th>
                                        <th className="text-center">City</th>
                                        <th className="text-center">State</th>
                                        <th className="text-center">Country</th>
                                        <th className="text-center">Postal Code</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-center">1</td>
                                        <td className="text-center">Address 1</td>
                                        <td className="text-center">Mazraa</td>
                                        <td className="text-center">Beirut</td>
                                        <td className="text-center">Lebanon</td>
                                        <td className="text-center">111</td>
                                        <td className="td-actions text-center">
                                        <Button
                                            className="btn-link mr-1"
                                            color="danger"
                                            data-toggle="tooltip"
                                            id="tooltip542628903"
                                            size="sm"
                                            type="button"
                                            href="/edit-product"
                                        >
                                            <i className="fa fa-remove" />
                                        </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">2</td>
                                        <td className="text-center">Address 2</td>
                                        <td className="text-center">Hamra</td>
                                        <td className="text-center">Beirut</td>
                                        <td className="text-center">Lebanon</td>
                                        <td className="text-center">111</td>
                                        <td className="td-actions text-center">
                                        <Button
                                            className="btn-link mr-1"
                                            color="danger"
                                            data-toggle="tooltip"
                                            id="tooltip542628903"
                                            size="sm"
                                            type="button"
                                            href="/edit-product"
                                        >
                                            <i className="fa fa-remove" />
                                        </Button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
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

export default EditVendor;
