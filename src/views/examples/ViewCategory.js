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
import CategoryService from "services/CategoryService";


class ViewCategory extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      categoryId: this.props.match.params.categoryId,
      category: {},
      parentTitle: ''
    }
  }

  componentDidMount(){
    CategoryService.getCategoryById(this.state.categoryId).then(res => {
        this.setState({category: res.data});
        if(this.state.category !== ''){
          CategoryService.getCategoryById(this.state.category.parentId).then(res => {
            this.setState({parentTitle: res.data.title});
        });
      }
    });
  }
  
  editCategory(categoryId){
    this.props.history.push('/edit-category/' + categoryId);
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
                          <Row>
                              <Col md="12" sm="12">
                                  <FormGroup>
                                      <h6>
                                          Title <span className="icon-danger">*</span>
                                      </h6>
                                      <Input
                                          className="border-input"
                                          placeholder="Category title"
                                          type="text"
                                          value={this.state.category.title}
                                          disabled
                                      />
                                  </FormGroup>
                              </Col>
                          </Row>
                          <Row>
                              <Col md="12" sm="12">
                                  <FormGroup>
                                      <h6>
                                          Parent Category <span className="icon-danger">*</span>
                                      </h6>
                                      <Input
                                          className="border-input"
                                          placeholder="Parent category"
                                          type="text"
                                          value={this.state.parentTitle}
                                          disabled
                                      />
                                  </FormGroup>
                              </Col>
                          </Row>
                          <Row>
                              <Col md="12" sm="12">
                                  <FormGroup>
                                      <h6>
                                          Description <span className="icon-danger">*</span>
                                      </h6>
                                      <Input
                                          className="textarea-limited"
                                          maxLength="150"
                                          placeholder="This is a textarea limited to 150 characters."
                                          rows="8"
                                          type="textarea"
                                          value={this.state.category.description}
                                          disabled
                                      />
                                  </FormGroup>
                              </Col>
                          </Row>
                          <div>
                            <Row className="buttons-row" style={{marginTop:"4%"}}>
                              <Col md="12" sm="12">
                                <Button
                                  block
                                  className="btn-round"
                                  color="primary"
                                  onClick = {() => this.editCategory(this.state.category.categoryId)} 
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


// function ViewCategory() {
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
//             <Row>
//                 <Col md="12" sm="12">
//                     <Container>
//                         <Row>
//                             <Col md="12" sm="12">
//                                 <FormGroup>
//                                     <h6>
//                                         Title <span className="icon-danger">*</span>
//                                     </h6>
//                                     <Input
//                                         className="border-input"
//                                         placeholder="Category title"
//                                         type="text"
//                                         disabled
//                                     />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md="12" sm="12">
//                                 <FormGroup>
//                                     <h6>
//                                         Parent Category <span className="icon-danger">*</span>
//                                     </h6>
//                                     <Input
//                                         className="border-input"
//                                         placeholder="Parent category"
//                                         type="text"
//                                         disabled
//                                     />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md="12" sm="12">
//                                 <FormGroup>
//                                     <h6>
//                                         Description <span className="icon-danger">*</span>
//                                     </h6>
//                                     <Input
//                                         className="textarea-limited"
//                                         maxLength="150"
//                                         placeholder="This is a textarea limited to 150 characters."
//                                         rows="8"
//                                         type="textarea"
//                                         disabled
//                                     />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <div>
//                           <Row className="buttons-row" style={{marginTop:"4%"}}>
//                             <Col md="12" sm="12">
//                               <Button
//                                 block
//                                 className="btn-round"
//                                 color="primary"
//                                 type="submit"
//                                 href="/edit-category"
//                               >
//                                 Edit
//                               </Button>
//                             </Col>
//                             </Row>
//                           </div>
//                     </Container>
//                 </Col>
//             </Row>
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

export default ViewCategory;
