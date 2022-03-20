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

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';


function OrdersManagement() {
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
                  <small>Orders Management</small>
              </h4>
              <Row>
                <Col md="2" sm="4" xs="6">
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
                            Edit order
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "2" ? "active" : ""}
                            onClick={() => {
                              setVTabs("2");
                            }}
                          >
                            Delete order
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "3" ? "active" : ""}
                            onClick={() => {
                              setVTabs("3");
                            }}
                          >
                            View order
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col md="10" sm="8" xs="6">
                  <TabContent activeTab={"vTabs" + vTabs}>

                      {/* Edit Section */}
                      <TabPane tabId="vTabs1">
                        <Container>
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Order number</th>
                                <th className="text-center">Order date</th>
                                <th className="text-center">Shipped</th>
                                <th className="text-center">Customer</th>
                                <th className="text-center">Ordered via</th>
                                <th className="text-center">Payment amount</th>
                                <th className="text-center">Paid</th>
                                <th className="text-center">Tracking URL</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">1</td>
                                <td className="text-center">Order 1</td>
                                <td className="text-center">21 / 05 / 2021</td>
                                <td className="text-center">Yes</td>
                                <td className="text-center">Ali Fakih</td>
                                <td className="text-center">Call</td>
                                <td className="text-center">$ 100</td>
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
                                    href="/edit-order"
                                  >
                                    <i className="fa fa-edit" />
                                  </Button>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">2</td>
                                <td className="text-center">Order 2</td>
                                <td className="text-center">21 / 05 / 2021</td>
                                <td className="text-center">No</td>
                                <td className="text-center">Ramy Sawan</td>
                                <td className="text-center">Whatsapp</td>
                                <td className="text-center">$ 100</td>
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
                                    href="/edit-order"
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
                      <TabPane tabId="vTabs2">
                        <Container>
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th />
                                <th className="text-center">Order number</th>
                                <th className="text-center">Order date</th>
                                <th className="text-center">Shipped</th>
                                <th className="text-center">Customer</th>
                                <th className="text-center">Ordered via</th>
                                <th className="text-center">Payment amount</th>
                                <th className="text-center">Paid</th>
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
                                <td className="text-center">Order 1</td>
                                <td className="text-center">21 / 05 / 2021</td>
                                <td className="text-center">Yes</td>
                                <td className="text-center">Ali Fakih</td>
                                <td className="text-center">Call</td>
                                <td className="text-center">$ 100</td>
                                <td className="text-center">Yes</td>
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
                                        defaultChecked
                                        defaultValue=""
                                        type="checkbox"
                                      />
                                      <span className="form-check-sign" />
                                    </Label>
                                  </FormGroup>
                                </td>
                                <td className="text-center">Order 2</td>
                                <td className="text-center">21 / 05 / 2021</td>
                                <td className="text-center">No</td>
                                <td className="text-center">Ramy Sawan</td>
                                <td className="text-center">Whatsapp</td>
                                <td className="text-center">$ 100</td>
                                <td className="text-center">Yes</td>
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
                          <Button color="danger" outline type="button" className="mr-1" onClick={handleClickOpen}>
                            Delete selected order
                          </Button>
                          <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>
                              Delete Order ?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Are you sure you want to delete selected order
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
                      <TabPane tabId="vTabs3">
                        <Container>
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Order number</th>
                                <th className="text-center">Order date</th>
                                <th className="text-center">Shipped</th>
                                <th className="text-center">Customer</th>
                                <th className="text-center">Ordered via</th>
                                <th className="text-center">Payment amount</th>
                                <th className="text-center">Paid</th>
                                <th className="text-center">Tracking URL</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">1</td>
                                <td className="text-center">Order 1</td>
                                <td className="text-center">21 / 05 / 2021</td>
                                <td className="text-center">Yes</td>
                                <td className="text-center">Ali Fakih</td>
                                <td className="text-center">Call</td>
                                <td className="text-center">$ 100</td>
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
                              <tr>
                                <td className="text-center">2</td>
                                <td className="text-center">Order 2</td>
                                <td className="text-center">21 / 05 / 2021</td>
                                <td className="text-center">No</td>
                                <td className="text-center">Ramy Sawan</td>
                                <td className="text-center">Whatsapp</td>
                                <td className="text-center">$ 100</td>
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

export default OrdersManagement;
