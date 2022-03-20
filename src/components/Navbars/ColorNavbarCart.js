import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Badge,
} from "reactstrap";
// core components

function ColorNavbarCart() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top")}
        expand="lg"
        id="navbar-main"
        style={{backgroundColor:"#252422"}}
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/presentation" tag={Link} style={{color:"white"}}>
              PhoneHub
            </NavbarBrand>

            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  style={{color:"white"}}
                  data-toggle="dropdown"
                  href="/e-commerce"
                  nav
                  role="button">
                  Products
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem header>Apple</DropdownItem>
                  <DropdownItem
                    href="/e-commerce">
                    Iphone
                  </DropdownItem>
                  <DropdownItem
                    href="/e-commerce">
                    iMac
                  </DropdownItem>        
                  <DropdownItem header>Samsung</DropdownItem>
                  <DropdownItem
                    href="/e-commerce">
                    Mobile
                  </DropdownItem>
                  <DropdownItem
                    href="/e-commerce">
                    Computing
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink
                      href="/about-us"
                      style={{color:"white"}}
                    >
                      About us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/contact-us"
                      style={{color:"white"}}
                    >
                      Contact us
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledDropdown>
              
              <NavItem className="position-relative">
                <Button className="btn-round" color="default" href="/shopping-cart">
                  <i className="nc-icon nc-cart-simple" /> Buy Now
                </Button>
                <Badge
                  className="notification-bubble"
                  color="danger"
                  pill
                >
                  2
                </Badge>
              </NavItem>
              <UncontrolledDropdown nav inNavbar style={{marginLeft:"25px"}}>
                  <DropdownToggle
                    data-toggle="dropdown"
                    height="30"
                    width="30"
                    tag={NavLink}
                  >
                    <div className="profile-photo-small">
                      <img
                        alt="..."
                        className="img-circle img-responsive img-no-padding"
                        src={
                          require("assets/img/faces/clem-onojeghuo-2.jpg")
                          .default
                        }
                      />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-danger" right>
                    <DropdownItem
                      href="/settings"
                    >
                      Me
                    </DropdownItem>
                    <DropdownItem
                      href="/login-page"
                    >
                      Login
                    </DropdownItem>
                    <DropdownItem
                      href="/register-page"
                    >
                      Register
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Sign out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorNavbarCart;
