import React from "react";
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  CustomInput,
  Table,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import SettingsHeader from "components/Headers/SettingsHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";
import ImageUpload from "components/CustomUpload/ImageUpload";
import OrdersManagement from "./OrdersManagement";

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';

function Settings() {
  
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("settings-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("settings-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        <SettingsHeader />
        <div className="profile-content section">
          <Container>
            <Row>
              <div className="profile-picture">
                <div
                  className="fileinput fileinput-new"
                  data-provides="fileinput"
                >
                  {/* <div className="fileinput-new img-no-padding">
                    <img
                      alt="..."
                      src={
                        require("assets/img/faces/clem-onojeghuo-2.jpg").default
                      }
                    />
                  </div> */}
                  <div className="fileinput-preview fileinput-exists img-no-padding" />
                  <div>
                    <ImageUpload/>
                    {/* <Button
                      className="btn-file btn-round"
                      color="default"
                      outline
                    >
                      <span className="fileinput-new">Change Photo</span>
                      <span className="fileinput-exists">Change</span>
                      <input name="..." type="file" />
                    </Button> */}
                    <br />
                    <Button
                      className="btn-link fileinput-exists"
                      color="danger"
                      data-dismiss="fileinput"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <Form className="settings-form">
                  <Row>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          className="border-input"
                          placeholder="First Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          className="border-input"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          className="border-input"
                          placeholder="Email"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input
                          className="border-input"
                          placeholder="Phone Number"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          className="border-input"
                          placeholder="Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          className="border-input"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>State</label>
                        <Input
                          className="border-input"
                          placeholder="State"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          className="border-input"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Postal code</label>
                        <Input
                          className="border-input"
                          placeholder="Postal code"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Additionnal description</label>
                        <Input
                          className="textarea-limited"
                          maxLength="150"
                          placeholder="Additionnal description"
                          rows="1"
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
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>
                      Delete Address ?
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Are you sure you want to delete selected address
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
                                onClick={handleClickOpen}
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
                                onClick={handleClickOpen}
                              >
                                <i className="fa fa-remove" />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <ul className="notifications">
                    <li className="notification-item d-flex justify-content-between align-items-center">
                      Allow receiving notifications{" "}
                      <CustomInput
                        type="switch"
                        defaultChecked
                        id="exampleCustomSwitch-1"
                        name="customSwitch-1"
                        className="custom-switch-info"
                      />
                    </li>
                  </ul>
                  <div className="text-center">
                    <Button
                      className="btn-wd btn-round"
                      color="danger"
                      type="submit"
                    >
                      Save
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default Settings;
