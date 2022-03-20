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


function ViewDriver() {
  const [categories, setCategories] = React.useState(["Food", " Drink"]);
  const [vTabs, setVTabs] = React.useState("1");

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
                            <Col md="12" sm="12">
                              <FormGroup>
                                <h6>
                                  Name <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="Ali"
                                  type="text"
                                  disabled
                                />
                              </FormGroup>
                              <FormGroup>
                                <h6>
                                  Phone Number <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="03 123456"
                                  type="text"
                                  disabled
                                />
                              </FormGroup>
                              <FormGroup>
                                <h6>
                                  Vehicle Plate Number <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="123 456"
                                  type="text"
                                  disabled
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                                <Col md="12" sm="7" style={{marginTop:"2%"}}>
                                <h6>
                                    Shipment
                                </h6>
                                <Table responsive striped>
                                    <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th className="text-center">Shipment Number</th>
                                        <th className="text-center">Delivery date</th>
                                        <th className="text-center">Shipping Cost</th>
                                        <th className="text-center">Paid</th>
                                        <th className="text-center">Shipment Tracking URL</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-center">1</td>
                                        <td className="text-center">15479283982</td>
                                        <td className="text-center">20 / 05 / 2021</td>
                                        <td className="text-center">$ 100</td>
                                        <td className="text-center">No</td>
                                        <td className="text-center"><a href="https://www.google.com" target="_blank">example.com</a></td>
                                        <td className="td-actions text-center">
                                          <Button
                                            className="btn-link mr-1"
                                            color="info"
                                            data-toggle="tooltip"
                                            id="tooltip542628903"
                                            size="sm"
                                            type="button"
                                            href="/view-order"
                                          >
                                            <i className="fa fa-eye" />
                                          </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">2</td>
                                        <td className="text-center">799351236635</td>
                                        <td className="text-center">18 / 05 / 2021</td>
                                        <td className="text-center">$ 25</td>
                                        <td className="text-center">Yes</td>
                                        <td className="text-center"><a href="https://www.google.com" target="_blank">example.com</a></td>
                                        <td className="td-actions text-center">
                                          <Button
                                            className="btn-link mr-1"
                                            color="info"
                                            data-toggle="tooltip"
                                            id="tooltip542628903"
                                            size="sm"
                                            type="button"
                                            href="/view-order"
                                          >
                                            <i className="fa fa-eye" />
                                          </Button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                                </Col>
                            </Row>
                          <Row className="buttons-row" style={{marginTop:"4%"}}>
                            <Col md="12" sm="12">
                              <Button
                                block
                                className="btn-round"
                                color="primary"
                                type="submit"
                                href="/edit-driver"
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

export default ViewDriver;
