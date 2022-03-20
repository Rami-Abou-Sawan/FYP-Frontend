import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

function AboutUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  return (
    <>
      <ColorNavbar />
      <AboutUsHeader />

      <FooterAboutUs />
    </>
  );
}

export default AboutUs;
