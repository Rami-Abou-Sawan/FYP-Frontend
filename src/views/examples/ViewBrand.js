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

import FooterAboutUs from "components/Footers/FooterAboutUs";
import DangerNavbar from "components/Navbars/DangerNavbar";
import ImageView from "components/CustomUpload/ImageView";
import BrandService from "services/BrandService";

class ViewBrand extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      brandId: this.props.match.params.brandId,
      brand: {} 
    }
  }

  componentDidMount(){
    BrandService.getBrandById(this.state.brandId).then(res => {
        this.setState({brand: res.data});
    });
  }
  
  editBrand(brandId){
    this.props.history.push('/edit-brand/' + brandId);
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
                        <ImageView />
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
                            value={this.state.brand.title}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="buttons-row" style={{marginTop:"4%"}}>
                      <Col md="12" sm="6">
                        <Button
                          block
                          className="btn-round"
                          color="primary"
                          onClick = {() => this.editBrand(this.state.brand.brandId)} 
                        >
                          Edit
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

// function ViewBrand() {
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
//                 <div>
//                     <Row>
//                         <Col md="5" sm="5">
//                           <h6>Brand Image</h6>
//                           <ImageView />
//                         </Col>
//                             <Col md="7" sm="7">
//                               <FormGroup>
//                                 <h6>
//                                   Name
//                                 </h6>
//                                 <Input
//                                   className="border-input"
//                                   placeholder="Brand name..."
//                                   type="text"
//                                   disabled
//                                 />
//                               </FormGroup>
//                             </Col>
//                           </Row>
//                           <Row className="buttons-row" style={{marginTop:"4%"}}>
//                             <Col md="12" sm="6">
//                               <Button
//                                 block
//                                 className="btn-round"
//                                 color="primary"
//                                 type="submit"
//                                 href="/edit-brand"
//                               >
//                                 Edit
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

export default ViewBrand;
