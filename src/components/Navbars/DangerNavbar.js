import React from "react";
import { Link } from "react-router-dom";
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
  Nav,
  Container,
  UncontrolledTooltip,
  NavLink,
} from "reactstrap";
// core components

function DangerNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
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
      <Navbar className="fixed-top" expand="lg" id="navbar-main" style={{backgroundColor:"#252422"}}>
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
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/product-management" style={{color:"white"}}>
                      Product
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/vendor-management" style={{color:"white"}}>
                      Vendor
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/purchase-management" style={{color:"white"}}>
                      Purchase
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/brand-management" style={{color:"white"}}>
                      Brand
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/category-management" style={{color:"white"}}>
                      Category
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/customer-management" style={{color:"white"}}>
                      Customer
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/orders-management" style={{color:"white"}}>
                      Orders
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/driver-management" style={{color:"white"}}>
                      Driver
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledDropdown>

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

export default DangerNavbar;
