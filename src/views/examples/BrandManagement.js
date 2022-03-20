import React, { Component } from "react";
import Select from "react-select";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
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

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import BrandService from "services/BrandService";

class BrandManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      brandName: "",
      brandImage: "",
      vTabs: "1",
      open: false,
      deletedBrand: "",
      deletedListBrand: [],
      btnDisabled: true,
    };

    this.handleBrandDelete = this.handleBrandDelete.bind(this);
    this.handleBrandName = this.handleBrandName.bind(this);
    this.handleBrandImage = this.handleBrandImage.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setVTabs = this.setVTabs.bind(this);
    this.saveBrand = this.saveBrand.bind(this);
    this.editBrand = this.editBrand.bind(this);
    this.deleteBrand = this.deleteBrand.bind(this);
    this.viewBrand = this.viewBrand.bind(this);
  }

  componentDidMount() {
    BrandService.getBrands().then((res) => {
      this.setState({ brands: res.data });
    });
  }

  editBrand(brandId) {
    this.props.history.push("/edit-brand/" + brandId);
  }

  viewBrand(brandId) {
    this.props.history.push("/view-brand/" + brandId);
  }

  deleteBrand(brandId) {
    if (this.state.deletedListBrand.length !== 0) {
      this.state.deletedListBrand.forEach((brandId) => {
        BrandService.deleteBrand(brandId)
          .then((res) => {
            this.setState({
              brands: this.state.brands.filter(
                (brand) => brand.brandId !== brandId
              ),
            });
            this.setState({ open: false });
            this.setState({ btnDisabled: true });
          })
          .catch((err) => {
            if (err.response && err.response.data) {
              console.log(err.response.data.message);
            }
          });
      });
    } else {
      BrandService.deleteBrand(brandId)
        .then((res) => {
          this.setState({
            brands: this.state.brands.filter(
              (brand) => brand.brandId !== brandId
            ),
          });
          this.setState({ open: false });
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            console.log(err.response.data.message);
          }
        });
    }
  }

  handleClickOpen = (open) => {
    this.setState({ open: true });
  };
  handleClose = (open) => {
    this.setState({ open: false });
  };
  setVTabs = (vTabs) => {
    this.setState({ vTabs: vTabs });
  };
  handleBrandName = (event) => {
    this.setState({ brandName: event.target.value });
    document.getElementById("brandNameDanger").className = "";
    document.getElementById("brandNameDangerMessage").innerHTML = "&nbsp;";
  };
  handleBrandImage = (event) => {
    this.setState({ brandImage: event.target.value });
  };
  handleBrandDelete = (brandId) => {
    this.setState({ deletedBrand: brandId });
    this.setState({ open: true });
  };

  handleListBrandDelete = (brandId) => {
    if (this.state.deletedListBrand.indexOf(brandId) !== -1) {
      this.state.deletedListBrand.pop(brandId);
    } else {
      this.state.deletedListBrand.push(brandId);
    }
    if (this.state.deletedListBrand.length === 0) {
      this.setState({ btnDisabled: true });
    } else {
      this.setState({ btnDisabled: false });
    }
    console.log(this.state.deletedListBrand);
  };

  saveBrand = (e) => {
    let brand = {
      title: this.state.brandName,
      photoURL: this.state.brandImage,
    };
    console.log("brand => " + JSON.stringify(brand));

    if (this.state.brandName === "") {
      document.getElementById("brandNameDanger").className = "has-danger";
      document.getElementById("brandNameDangerMessage").innerText = "Required";
    } else {
      document.getElementById("brandNameDanger").className = "";
      document.getElementById("brandNameDangerMessage").innerHTML = "&nbsp;";
      BrandService.createBrand(brand)
        .then((res) => {
          this.props.history.push("/presentation");
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            console.log(err.response.data.message);
          }
        });
    }
  };

  cancel() {
    this.props.history.push("/brand-management");
  }

  render() {
    return (
      <>
        <DangerNavbar />
        <Container className="tim-container">
          <div id="description-areas" style={{ marginTop: "10%" }}>
            <Row>
              <Col md="12" sm="12">
                <h4>
                  <small>Brand Management</small>
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
                              className={
                                this.state.vTabs === "1" ? "active" : ""
                              }
                              onClick={() => {
                                this.setVTabs("1");
                              }}
                            >
                              New brand
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={
                                this.state.vTabs === "2" ? "active" : ""
                              }
                              onClick={() => {
                                this.setVTabs("2");
                              }}
                            >
                              Edit brand
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={
                                this.state.vTabs === "3" ? "active" : ""
                              }
                              onClick={() => {
                                this.setVTabs("3");
                              }}
                            >
                              Delete brand
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={
                                this.state.vTabs === "4" ? "active" : ""
                              }
                              onClick={() => {
                                this.setVTabs("4");
                              }}
                            >
                              View brand
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </div>
                    </div>
                  </Col>
                  <Col md="9" sm="8" xs="6">
                    <TabContent activeTab={"vTabs" + this.state.vTabs}>
                      {/* Add Section */}
                      <TabPane tabId="vTabs1">
                        <Container>
                          <div>
                            <Row>
                              <Col md="5" sm="5">
                                <h6>Brand Image</h6>
                                <ImageUpload />
                              </Col>
                              <Col md="7" sm="7">
                                <FormGroup id="brandNameDanger">
                                  <h6>
                                    Name <span className="icon-danger">*</span>
                                  </h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Brand name..."
                                    type="text"
                                    value={this.state.brandName}
                                    onChange={this.handleBrandName}
                                  />
                                  <span
                                    id="brandNameDangerMessage"
                                    style={{
                                      color: "#f5593d",
                                      fontSize: ".8rem",
                                    }}
                                  >
                                    &nbsp;
                                  </span>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row
                              className="buttons-row"
                              style={{ marginTop: "4%" }}
                            >
                              <Col md="6" sm="6">
                                <Button
                                  block
                                  className="btn-round"
                                  color="danger"
                                  outline
                                  type="reset"
                                  onClick={this.cancel.bind(this)}
                                >
                                  Cancel
                                </Button>
                              </Col>
                              <Col md="6" sm="6">
                                <Button
                                  block
                                  className="btn-round"
                                  color="primary"
                                  onClick={this.saveBrand}
                                >
                                  Save
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Container>
                      </TabPane>

                      {/* Edit Section */}
                      <TabPane tabId="vTabs2">
                        <Container>
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Brand Name</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.brands.map((brand) => (
                                <tr key={brand.brandId}>
                                  <td className="text-center">
                                    {" "}
                                    {brand.brandId}{" "}
                                  </td>
                                  <td className="text-center">
                                    {" "}
                                    {brand.title}{" "}
                                  </td>
                                  <td className="td-actions text-center">
                                    <Button
                                      className="btn-link mr-1"
                                      color="info"
                                      data-toggle="tooltip"
                                      id="tooltip542628903"
                                      size="sm"
                                      type="button"
                                      onClick={() =>
                                        this.editBrand(brand.brandId)
                                      }
                                    >
                                      <i className="fa fa-edit" />
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Container>
                      </TabPane>

                      {/* Delete Section */}
                      <TabPane tabId="vTabs3">
                        <Container>
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th />
                                <th className="text-center">Brand Name</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.brands.map((brand) => (
                                <tr key={brand.brandId}>
                                  <td className="text-center">
                                    {" "}
                                    {brand.brandId}{" "}
                                  </td>
                                  <td className="text-center">
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          defaultValue=""
                                          type="checkbox"
                                          onClick={() =>
                                            this.handleListBrandDelete(
                                              brand.brandId
                                            )
                                          }
                                        />
                                        <span className="form-check-sign" />
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td className="text-center">
                                    {" "}
                                    {brand.title}{" "}
                                  </td>
                                  <td className="td-actions text-center">
                                    <Button
                                      className="btn-link mr-1"
                                      color="danger"
                                      data-toggle="tooltip"
                                      id="tooltip542628903"
                                      size="sm"
                                      type="button"
                                      onClick={() =>
                                        this.handleBrandDelete(brand.brandId)
                                      }
                                    >
                                      <i className="fa fa-remove" />
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                          <Button
                            id="btnDelete"
                            color="danger"
                            outline
                            type="button"
                            className="mr-1"
                            disabled={this.state.btnDisabled}
                            onClick={this.handleClickOpen}
                          >
                            Delete selected brand
                          </Button>
                          <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                          >
                            <DialogTitle>Delete Brand ?</DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Are you sure you want to delete selected brand
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                onClick={this.handleClose}
                                color="default"
                                autoFocus
                              >
                                Cancel
                              </Button>
                              <Button
                                onClick={() =>
                                  this.deleteBrand(this.state.deletedBrand)
                                }
                                color="danger"
                              >
                                Delete
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Container>
                      </TabPane>

                      {/* View Section */}
                      <TabPane tabId="vTabs4">
                        <Container>
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Brand Name</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.brands.map((brand) => (
                                <tr key={brand.brandId}>
                                  <td className="text-center">
                                    {" "}
                                    {brand.brandId}{" "}
                                  </td>
                                  <td className="text-center">
                                    {" "}
                                    {brand.title}{" "}
                                  </td>
                                  <td className="td-actions text-center">
                                    <Button
                                      className="btn-link mr-1"
                                      color="info"
                                      data-toggle="tooltip"
                                      id="tooltip542628903"
                                      size="sm"
                                      type="button"
                                      onClick={() =>
                                        this.viewBrand(brand.brandId)
                                      }
                                    >
                                      <i className="fa fa-eye" />
                                    </Button>
                                  </td>
                                </tr>
                              ))}
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
          <div className="section"></div>
        </div>
        <FooterAboutUs />
      </>
    );
  }
}

// function BrandManagement() {
//   const [categories, setCategories] = React.useState(["Food", " Drink"]);
//   const [vTabs, setVTabs] = React.useState("1");
//   const dataCategory = [
//     { label: "Mobile", value: 1},
//     { label: "Laptops", value: 2},
//     { label: "Accessories", value: 3}
//   ];
//   const dataBrand = [
//     { label: "Apple", value: 1},
//     { label: "Samsung", value: 2}
//   ];
//   const dataVendor = [
//     { label: "Ali Fakih", value: 1},
//     { label: "Ramy Sawan", value: 2}
//   ];
//   const dataSize = [
//     { label: "5'", value: 1},
//     { label: "7.5'", value: 2}
//   ];
//   const dataColor = [
//     { label: "Black", value: 1},
//     { label: "White", value: 2},
//     { label: "Red", value: 3}
//   ];
//   const [open, setOpen] = React.useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const customStyles = {
//     option: (provided, state) => ({
//       ...provided,

//       color: state.isSelected ? 'black' : 'black',
//     }),
//     singleValue: (provided, state) => {
//       const opacity = state.isDisabled ? 0.5 : 1;
//       const transition = 'opacity 300ms';
//       return { ...provided, opacity, transition };
//     }
//   }

//   document.documentElement.classList.remove("nav-open");
//   React.useEffect(() => {
//     document.body.classList.add("brand-management");
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//     return function cleanup() {
//       document.body.classList.remove("brand-management");
//     };
//   });

//   return (
//     <>
//       <DangerNavbar />
//       <Container className="tim-container">
//         <div id="description-areas" style={{marginTop:"10%"}}>
//           <Row>
//             <Col md="12" sm="12">
//               <h4>
//                   <small>Brand Management</small>
//               </h4>
//               <Row>
//                 <Col md="3" sm="4" xs="6">
//                   <div className="nav-tabs-navigation">
//                     <div className="nav-tabs-wrapper">
//                       <Nav
//                         className="flex-column nav-stacked"
//                         role="tablist"
//                         tabs
//                       >
//                         <NavItem>
//                           <NavLink
//                             className={vTabs === "1" ? "active" : ""}
//                             onClick={() => {
//                               setVTabs("1");
//                             }}
//                           >
//                             New brand
//                           </NavLink>
//                         </NavItem>
//                         <NavItem>
//                           <NavLink
//                             className={vTabs === "2" ? "active" : ""}
//                             onClick={() => {
//                               setVTabs("2");
//                             }}
//                           >
//                             Edit brand
//                           </NavLink>
//                         </NavItem>
//                         <NavItem>
//                           <NavLink
//                             className={vTabs === "3" ? "active" : ""}
//                             onClick={() => {
//                               setVTabs("3");
//                             }}
//                           >
//                             Delete brand
//                           </NavLink>
//                         </NavItem>
//                         <NavItem>
//                           <NavLink
//                             className={vTabs === "4" ? "active" : ""}
//                             onClick={() => {
//                               setVTabs("4");
//                             }}
//                           >
//                             View brand
//                           </NavLink>
//                         </NavItem>
//                       </Nav>
//                     </div>
//                   </div>
//                 </Col>
//                 <Col md="9" sm="8" xs="6">
//                   <TabContent activeTab={"vTabs" + vTabs}>

//                     {/* Add Section */}
//                     <TabPane tabId="vTabs1">
//                       <Container>
//                         <div>
//                           <Row>
//                             <Col md="5" sm="5">
//                               <h6>Brand Image</h6>
//                               <ImageUpload />
//                             </Col>
//                             <Col md="7" sm="7">
//                               <FormGroup>
//                                 <h6>
//                                   Name <span className="icon-danger">*</span>
//                                 </h6>
//                                 <Input
//                                   className="border-input"
//                                   placeholder="Brand name..."
//                                   type="text"
//                                 />
//                               </FormGroup>
//                             </Col>
//                           </Row>
//                           <Row className="buttons-row" style={{marginTop:"4%"}}>
//                             <Col md="6" sm="6">
//                               <Button
//                                 block
//                                 className="btn-round"
//                                 color="danger"
//                                 outline
//                                 type="reset"
//                               >
//                                 Cancel
//                               </Button>
//                             </Col>
//                             <Col md="6" sm="6">
//                               <Button
//                                 block
//                                 className="btn-round"
//                                 color="primary"
//                                 type="submit"
//                               >
//                                 Save
//                               </Button>
//                             </Col>
//                             </Row>
//                           </div>
//                         </Container>
//                       </TabPane>

//                       {/* Edit Section */}
//                       <TabPane tabId="vTabs2">
//                         <Container>
//                           <Table responsive striped>
//                             <thead>
//                               <tr>
//                                 <th className="text-center">#</th>
//                                 <th className="text-center">Brand Name</th>
//                                 <th className="text-center">Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               <tr>
//                                 <td className="text-center">1</td>
//                                 <td className="text-center">Brand 1</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="info"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     href="/edit-brand"
//                                   >
//                                     <i className="fa fa-edit" />
//                                   </Button>
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td className="text-center">2</td>
//                                 <td className="text-center">Brand 2</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="info"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     href="/edit-brand"
//                                   >
//                                     <i className="fa fa-edit" />
//                                   </Button>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </Table>
//                         </Container>
//                       </TabPane>

//                       {/* Delete Section */}
//                       <TabPane tabId="vTabs3">
//                         <Container>
//                           <Table responsive striped>
//                             <thead>
//                               <tr>
//                                 <th className="text-center">#</th>
//                                 <th />
//                                 <th className="text-center">Brand Name</th>
//                                 <th className="text-center">Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               <tr>
//                                 <td className="text-center">1</td>
//                                 <td>
//                                   <FormGroup check>
//                                     <Label check>
//                                       <Input
//                                         defaultValue=""
//                                         type="checkbox"
//                                       />
//                                       <span className="form-check-sign" />
//                                     </Label>
//                                   </FormGroup>
//                                 </td>
//                                 <td className="text-center">Brand 1</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="danger"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     onClick={handleClickOpen}
//                                   >
//                                     <i className="fa fa-remove" />
//                                   </Button>
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td className="text-center">2</td>
//                                 <td>
//                                   <FormGroup check>
//                                     <Label check>
//                                       <Input
//                                         defaultChecked
//                                         defaultValue=""
//                                         type="checkbox"
//                                       />
//                                       <span className="form-check-sign" />
//                                     </Label>
//                                   </FormGroup>
//                                 </td>
//                                 <td className="text-center">Brand 2</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="danger"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     onClick={handleClickOpen}
//                                   >
//                                     <i className="fa fa-remove" />
//                                   </Button>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </Table>
//                           <Button color="danger" outline type="button" className="mr-1" onClick={handleClickOpen}>
//                             Delete selected brand
//                           </Button>
//                           <Dialog open={open} onClose={handleClose}>
//                             <DialogTitle>
//                               Delete Brand ?
//                             </DialogTitle>
//                             <DialogContent>
//                               <DialogContentText>
//                                 Are you sure you want to delete selected brand
//                               </DialogContentText>
//                             </DialogContent>
//                             <DialogActions>
//                               <Button onClick={handleClose} color="default" autoFocus>
//                               Cancel
//                               </Button>
//                               <Button onClick={handleClose} color="danger">
//                               Delete
//                               </Button>
//                             </DialogActions>
//                           </Dialog>
//                         </Container>
//                       </TabPane>

//                       {/* View Section */}
//                       <TabPane tabId="vTabs4">
//                         <Container>
//                           <Table responsive striped>
//                             <thead>
//                               <tr>
//                                 <th className="text-center">#</th>
//                                 <th className="text-center">Brand Name</th>
//                                 <th className="text-center">Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               <tr>
//                                 <td className="text-center">1</td>
//                                 <td className="text-center">Brand 1</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="info"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     href="/view-brand"
//                                   >
//                                     <i className="fa fa-eye" />
//                                   </Button>
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td className="text-center">2</td>
//                                 <td className="text-center">Brand 2</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="info"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     href="/view-brand"
//                                   >
//                                     <i className="fa fa-eye" />
//                                   </Button>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </Table>
//                         </Container>
//                       </TabPane>
//                   </TabContent>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </div>
//         </Container>

//         <div className="main">
//           <div className="section">
//           </div>
//         </div>
//       <FooterAboutUs />
//     </>
//   );
// }

export default BrandManagement;
