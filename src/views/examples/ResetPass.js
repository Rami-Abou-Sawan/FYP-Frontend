import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";

function ResetPass() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("reset-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("reset-page");
      document.body.classList.remove("full-screen");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/bruno-abatti.jpg").default +
              ")",
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
                <Card className="card-register">
                  <CardTitle tag="h3">Reset Password</CardTitle>
                  <Form className="register-form">
                  <div className="division"/>
                  <div className="register">
                      <br></br>
                        <p>Please enter the email address that you used to register, and we will send you an email with a verification code to change your password</p>
                    </div>
                    <label>Email</label>
                    <Input
                      className="no-border"
                      placeholder="Email"
                      type="text"
                    />
                    <Button block className="btn-round" color="danger" href="/change-pass">
                      Send verification
                    </Button>
                    <br />
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterAboutUs />
      </div>
    </>
  );
}

export default ResetPass;
