import React, { Component } from "react";
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

import ImageUpload from "components/CustomUpload/ImageUpload.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";
import DangerNavbar from "components/Navbars/DangerNavbar";
import BrandService from "services/BrandService";

class EditBrand extends Component{

  constructor(props){
    super(props)
    this.state = {
      brandId: this.props.match.params.brandId,
      brandName: '',
      brandImage: ''
    }
    

    this.changeBrandNameHandler = this.changeBrandNameHandler.bind(this);
    // this.changeBrandImageHandler = this.changeBrandImageHandler.bind(this);
    this.updateBrand = this.updateBrand.bind(this);
  }

  componentDidMount(){
    BrandService.getBrandById(this.state.brandId).then( (res) => {
        let brand = res.data;
        this.setState({
          brandName: brand.title,
          brandImage: brand.photoURL
        });
    });
  }

  updateBrand = (e) => {
    e.preventDefault();
    let brand = {title: this.state.brandName, photoURL: this.state.brandImage};
    console.log('brand => ' + JSON.stringify(brand));

    if(this.state.brandName === ''){
        document.getElementById("brandNameDanger").className = "has-danger";
        document.getElementById("brandNameDangerMessage").innerText = "Required";
    }
    else{
      document.getElementById("brandNameDanger").className = "";
      document.getElementById("brandNameDangerMessage").innerHTML = "&nbsp;";
      BrandService.updateBrand(brand, this.state.brandId).then( res => {
        this.props.history.push('/brand-management');
      });
    }
  }

  cancel(){
    this.props.history.push('/brand-management');
  }

  changeBrandNameHandler = (event) => {
      this.setState({brandName: event.target.value});
  }

  render(){
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
                                    onChange={this.changeBrandNameHandler}
                                  />
                                  <span 
                                    id="brandNameDangerMessage" 
                                    style={{color:"#f5593d", fontSize: ".8rem"}}>&nbsp;</span>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row className="buttons-row" style={{marginTop:"4%"}}>
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
                                  onClick={this.updateBrand}
                                >
                                  Save
                                </Button>
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

}


// function EditBrand() {
//   const [categories, setCategories] = React.useState(["Food", " Drink"]);
//   const [vTabs, setVTabs] = React.useState("1");

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
//     document.body.classList.add("product-management");
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//     return function cleanup() {
//       document.body.classList.remove("product-management");
//     };
//   });
  
//   return (
//     <>
//       <DangerNavbar />
//       <Container className="tim-container">
//         <div id="description-areas" style={{marginTop:"10%"}}>
//           <Row>
//             <Col md="12" sm="12">
//             <Container>
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
//                                   placeholder="Apple"
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
//             </Col>
//           </Row>
//         </div>
//         </Container>

//       <div className="main">
//         <div className="section">
          
//         </div>
//       </div>
//       <FooterAboutUs />
//     </>
//   );
// }

export default EditBrand;
