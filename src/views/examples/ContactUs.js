import React, { Component } from "react";

// reactstrap components
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.newContact = this.newContact.bind(this);

    this.state = {
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      submitted: false,
    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }
  onChangeMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  newContact() {
    this.setState({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      submitted: false,
    });
  }

  saveContact() {}

  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper">
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" + require("assets/img/background13.png").default + ")",
            }}
          >
            <div className="filter" />

            <Container style={{ marginTop: "13%" }}>
              <div className="text-center" style={{ marginBottom: "5%" }}>
                <h1>Get in touch with us</h1>
                <h3>Feel free to ask any questions about our agent</h3>
              </div>

              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  {/* <h3 className="title">
                      <small>Or drop us a note</small>
                    </h3> */}
                  <Form className="contact">
                    <Row>
                      <Col md="6">
                        <Input
                          placeholder="First Name"
                          type="text"
                          id="firstName"
                          required
                          value={this.state.firstName}
                          onChange={this.onChangeFirstName}
                          name="firstName"
                        />
                      </Col>
                      <Col md="6">
                        <Input
                          placeholder="Last Name"
                          type="text"
                          id="lastName"
                          required
                          value={this.state.lastName}
                          onChange={this.onChangeLastName}
                          name="lastName"
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md="6">
                        <Input
                          placeholder="Email"
                          type="text"
                          id="email"
                          required
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          name="email"
                        />
                      </Col>
                      <Col md="6">
                        <Input
                          placeholder="Subject"
                          type="text"
                          id="subject"
                          required
                          value={this.state.subject}
                          onChange={this.onChangeSubject}
                          name="subject"
                        />
                      </Col>
                    </Row>
                    <Input
                      placeholder="Message"
                      rows="7"
                      type="textarea"
                      style={{ marginTop: "5%" }}
                      required
                      value={this.state.message}
                      onChange={this.onChangeMessage}
                    />
                    <br />
                    <Row>
                      <Col className="ml-auto mr-auto" md="6">
                        <Button
                          block
                          className="btn-round"
                          color="success"
                          onClick={this.saveContact}
                        >
                          Send
                        </Button>
                      </Col>
                    </Row>
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
}

export default ContactUs;
/**
 * function ContactUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  */
