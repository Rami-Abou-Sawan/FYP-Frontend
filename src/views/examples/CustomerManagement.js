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


function CustomerManagement() {
  const [categories, setCategories] = React.useState(["Food", " Drink"]);
  const [vTabs, setVTabs] = React.useState("1");
  
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
    document.body.classList.add("customer-management");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("customer-management");
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
                  <small>Customer Management</small>
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
                            Delete customer
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "2" ? "active" : ""}
                            onClick={() => {
                              setVTabs("2");
                            }}
                          >
                            View customer
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col md="9" sm="8" xs="6">
                  <TabContent activeTab={"vTabs" + vTabs}>

                      {/* Delete Section */}
                      <TabPane tabId="vTabs1">
                        <Container>
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th />
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
                                <td className="text-center">Ali Fakih</td>
                                <td className="text-center">03 123456</td>
                                <td className="text-center">fakih.ali33@outlook.com</td>
                                <td className="text-center">Mazraa, Beirut, Lebanon</td>
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
                                <td className="text-center">Ramy Sawan</td>
                                <td className="text-center">03 987654</td>
                                <td className="text-center">ramy.sawan@hotmail.com</td>
                                <td className="text-center">Hamra, Beirut, Lebanon</td>
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
                            Delete selected customer
                          </Button>
                          <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>
                              Delete Customer ?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Are you sure you want to delete selected customer
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
                      <TabPane tabId="vTabs2">
                        <Container>
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
                              <tr>
                                <td className="text-center">2</td>
                                <td className="text-center">Ramy Sawan</td>
                                <td className="text-center">03 987654</td>
                                <td className="text-center">ramy.sawan@hotmail.com</td>
                                <td className="text-center">Hamra, Beirut, Lebanon</td>
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

export default CustomerManagement;
