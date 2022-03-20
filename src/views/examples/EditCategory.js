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

class EditCategory extends Component{

  constructor(props){
    super(props)
    this.state = {
      categoryId: this.props.match.params.categoryId,
      categoryTitle: '',
      categoryDesc: '',
      categoryImage: '',
      categoryParent: '',
      dataCategories: [],
      categoryParent : '',
      selectedValue: ''
    }
    

    this.changeCategoryTitleHandler = this.changeCategoryTitleHandler.bind(this);
    this.changeCategoryDescHandler = this.changeCategoryDescHandler.bind(this);
    this.handleCategoryParent = this.handleCategoryParent.bind(this);
    // this.changeBrandImageHandler = this.changeBrandImageHandler.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  componentDidMount(){
    CategoryService.getCategoryById(this.state.categoryId).then( (res) => {
        let category = res.data;
        this.setState({
          categoryTitle: category.title,
          categoryDesc: category.description,
          categoryImage: category.photoURL,
          categoryParent: category.parentid,
          selectedValue: category.parentid
        });
    });
    CategoryService.getCategories().then((res) => {
      res.data.forEach(category => {
        if(category.title !== this.state.categoryTitle){
          let dropDownEle = { label: category["title"], value: category };
          this.state.dataCategories.push(dropDownEle);
        }
      });
    });
  }

  updateCategory = (e) => {
    e.preventDefault();
    let category = {title: this.state.categoryTitle, description:this.state.categoryDesc, photoURL: this.state.categoryImage};
    console.log('category => ' + JSON.stringify(category));

    if(this.state.categoryTitle === ''){
      document.getElementById("categoryTitleDanger").className = "has-danger";
      document.getElementById("categoryTitleDangerMessage").innerText = "Required";
    }
    if(this.state.categoryDesc === ''){
      document.getElementById("categoryDescDanger").className = "has-danger";
      document.getElementById("categoryDescDangerMessage").innerText = "Required";
    }
    // else{
    //   CategoryService.updateCategory(category, this.state.categoryId).then( res => {
    //     this.props.history.push('/category-management');
    //   });
    // }
    else{
      if(this.state.categoryParent !== ''){
        CategoryService.createCategoryWithParent(category, this.state.categoryParent).then(res => {
          this.props.history.push('/presentation');
        })
        .catch(err => {
          if (err.response && err.response.data) {
            
            console.log(err.response.data.message)
          }
        });
      }
      else{
        CategoryService.createCategory(category).then(res => {
          this.props.history.push('/presentation');
        })
        .catch(err => {
          if (err.response && err.response.data) {
            
            console.log(err.response.data.message)
          }
        });
      }
    }
    
  }

  cancel(){
    this.props.history.push('/category-management');
  }

  changeCategoryTitleHandler = (event) => {
      this.setState({categoryTitle: event.target.value});
  }
  changeCategoryDescHandler = (event) => {
    this.setState({categoryDesc: event.target.value});
  }
  handleCategoryParent = (event) => {
    this.setState({categoryParent: event.value.categoryId});
    console.log(event.value.categoryId);
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
                      <Col md="12" sm="12">
                        <FormGroup id="categoryTitleDanger">
                          <h6>
                            Title <span className="icon-danger">*</span>
                          </h6>
                          <Input
                            className="border-input"
                            placeholder="Category title"
                            type="text"
                            value={this.state.categoryTitle} 
                            onChange={this.changeCategoryTitleHandler}
                          />
                          <span 
                            id="categoryTitleDangerMessage" 
                            style={{color:"#f5593d", fontSize: ".8rem"}}>&nbsp;</span>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" sm="12">
                        <FormGroup>
                          <h6>
                            Parent Category
                          </h6>
                          <Select 
                            placeholder={'Parent Category'}
                            options={this.state.dataCategories}
                            onChange={this.handleCategoryParent}
                            value = {this.state.dataCategories.find(category => category.value === this.state.selectedValue)}
                          /> 
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" sm="12">
                        <FormGroup id="categoryDescDanger">
                          <h6>
                            Description <span className="icon-danger">*</span>
                          </h6>
                          <Input
                            className="textarea-limited"
                            maxLength="150"
                            placeholder="Category Description"
                            rows="8"
                            type="textarea"
                            value={this.state.categoryDesc} 
                            onChange={this.changeCategoryDescHandler}
                          />
                          <span 
                            id="categoryDescDangerMessage" 
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
                          onClick={this.updateCategory}
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

// function EditCategory() {
//   const [categories, setCategories] = React.useState(["Food", " Drink"]);
//   const [vTabs, setVTabs] = React.useState("1");
//   const dataCategory = [
//     { label: "Mobile", value: 1},
//     { label: "Laptops", value: 2},
//     { label: "Accessories", value: 3}
//   ];
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
//               <Container>
//                 <div>
//                   <Row>
//                     <Col md="12" sm="12">
//                       <FormGroup>
//                         <h6>
//                           Title <span className="icon-danger">*</span>
//                         </h6>
//                         <Input
//                           className="border-input"
//                           placeholder="Category title"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12" sm="12">
//                       <FormGroup>
//                         <h6>
//                           Parent Category <span className="icon-danger">*</span>
//                         </h6>
//                         <Select 
//                           placeholder={'Parent Category'}
//                           options={dataCategory}
//                           styles={customStyles} 
//                         /> 
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12" sm="12">
//                       <FormGroup>
//                         <h6>
//                           Description <span className="icon-danger">*</span>
//                         </h6>
//                         <Input
//                           className="textarea-limited"
//                           maxLength="150"
//                           placeholder="This is a textarea limited to 150 characters."
//                           rows="8"
//                           type="textarea"
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row className="buttons-row" style={{marginTop:"4%"}}>
//                     <Col md="6" sm="6">
//                       <Button
//                         block
//                         className="btn-round"
//                         color="danger"
//                         outline
//                         type="reset"
//                         onClick={this.cancel.bind(this)} 
//                       >
//                         Cancel
//                       </Button>
//                     </Col>
//                     <Col md="6" sm="6">
//                       <Button
//                         block
//                         className="btn-round"
//                         color="primary"
//                         onClick={this.updateCategory}
//                       >
//                         Save
//                       </Button>
//                     </Col>
//                     </Row>
//                 </div>
//               </Container>
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

export default EditCategory;
