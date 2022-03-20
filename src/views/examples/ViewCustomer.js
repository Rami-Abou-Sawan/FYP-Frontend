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


function ViewCustomer() {
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
                                  Email <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="fakih.ali33@outlook.com"
                                  type="text"
                                  disabled
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                            <Row>
                                <Col md="12" sm="7" style={{marginTop:"2%"}}>
                                <h6>
                                  Address
                                </h6>
                                <Table responsive striped>
                                    <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th className="text-center">Address</th>
                                        <th className="text-center">City</th>
                                        <th className="text-center">State</th>
                                        <th className="text-center">Country</th>
                                        <th className="text-center">Postal Code</th>
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
                                    </tr>
                                    <tr>
                                        <td className="text-center">2</td>
                                        <td className="text-center">Address 2</td>
                                        <td className="text-center">Hamra</td>
                                        <td className="text-center">Beirut</td>
                                        <td className="text-center">Lebanon</td>
                                        <td className="text-center">111</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12" sm="7" style={{marginTop:"2%"}}>
                                <h6>
                                  Order History
                                </h6>
                                <Table responsive striped>
                                    <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th className="text-center">Order Number</th>
                                        <th className="text-center">Order date</th>
                                        <th className="text-center">Total</th>
                                        <th className="text-center">Shipped</th>
                                        <th className="text-center">Ordered via</th>
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
                                        <td className="text-center">Call</td>
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
                                        <td className="text-center">Whatsapp</td>
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

export default ViewCustomer;
