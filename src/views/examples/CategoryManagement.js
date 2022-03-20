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

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import CategoryService from "services/CategoryService";


class CategoryManagement extends Component{

  constructor(props){
    super(props);
    this.state = {
      categories: [],
      categoryTitle : '',
      categoryDesc : '',
      categoryParent : '',
      categoryParentTitle: '',
      categoryImage: '',
      vTabs : "1",
      open: false,
      deletedCategory: '',
      deletedListCategory: [], 
      btnDisabled: true,
      dataCategories: [],
      customStyles: '',
      selectedValue: ''
    }
    this.handleParentTitle = this.handleParentTitle.bind(this);
    this.handleCategoryDelete = this.handleCategoryDelete.bind(this);
    this.handleCategoryTitle = this.handleCategoryTitle.bind(this);
    this.handleCategoryDesc = this.handleCategoryDesc.bind(this);
    this.handleCategoryParent = this.handleCategoryParent.bind(this);
    this.handleCategoryImage = this.handleCategoryImage.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setVTabs = this.setVTabs.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.viewCategory = this.viewCategory.bind(this);
  }

  componentDidMount(){
    CategoryService.getCategories().then((res) => {
        this.setState({categories : res.data});
        res.data.forEach(category => {
          let dropDownEle = { label: category["title"], value: category };
          this.state.dataCategories.push(dropDownEle);
        });
    });
  }

  editCategory(categoryId){
    this.props.history.push('/edit-category/' + categoryId);
  }

  viewCategory(categoryId){
    this.props.history.push('/view-category/' + categoryId);
  }

  deleteCategory(categoryId){
    if(this.state.deletedListCategory.length !== 0){
      this.state.deletedListCategory.forEach(categoryId => {
        CategoryService.deleteCategory(categoryId).then(res => {
          this.setState({categories: this.state.categories.filter(category => category.categoryId !== categoryId)});
          this.setState({ open: false })
          this.setState({ btnDisabled: true })
        })
        .catch(err => {
          if (err.response && err.response.data) {
            console.log(err.response.data.message)
          }
        });
      });
    }
    else{
      CategoryService.deleteCategory(categoryId).then(res => {
        this.setState({categories: this.state.categories.filter(category => category.categoryId !== categoryId)});
        this.setState({ open: false })
      })
      .catch(err => {
        if (err.response && err.response.data) {
          console.log(err.response.data.message)
        }
      });;
    }
  }

  // handleCustomStyles = (customStyles) => {
  //   option: (provided, state) => ({
  //     ...provided,
      
  //     color: state.isSelected ? 'black' : 'black',
  //   }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';
  //     return { ...provided, opacity, transition };
  //   }
  // }

  handleClickOpen = (open) => {
    this.setState({ open: true})
  };
  handleClose = (open) => {
    this.setState({ open: false })
  };
  setVTabs = (vTabs) => {
    this.setState({ vTabs: vTabs })
  };
  handleCategoryTitle = (event) => {
    this.setState({categoryTitle: event.target.value});
    document.getElementById("categoryTitleDanger").className = "";
    document.getElementById("categoryTitleDangerMessage").innerHTML = "&nbsp;";
  }
  handleCategoryDesc = (event) => {
    this.setState({categoryDesc: event.target.value});
    document.getElementById("categoryDescDanger").className = "";
    document.getElementById("categoryDescDangerMessage").innerHTML = "&nbsp;";
  }
  handleCategoryParent = (event) => {
    this.setState({categoryParent: event.value.categoryId});
    console.log(event.value.categoryId);
  }
  handleCategoryImage = (event) => {
    this.setState({categoryImage: event.target.value});
  }
  handleCategoryDelete = (categoryId) => {
    this.setState({deletedCategory: categoryId});
    this.setState({open: true});
  }

  handleParentTitle = (parentCategoryId) => {
    CategoryService.getCategoryById(parentCategoryId).then((res) => {
      console.log(res.data.title);
      
    }).catch(err => {
      if (err.response && err.response.data) {
        console.log(err.response.data.message)
      }
    });
  }

  handleListCategoryDelete = (categoryId) => {
    if(this.state.deletedListCategory.indexOf(categoryId) !== -1){
      this.state.deletedListCategory.pop(categoryId);
    }
    else{
      this.state.deletedListCategory.push(categoryId);
    }
    if(this.state.deletedListCategory.length === 0){
      this.setState({btnDisabled: true})
    }
    else{
      this.setState({btnDisabled: false})
    }
    console.log(this.state.deletedListCategory);
  };

  saveCategory = (e) => {
    e.preventDefault();
    let category = {title: this.state.categoryTitle, description: this.state.categoryDesc, photoURL: this.state.categoryImage};
    console.log('category => ' + JSON.stringify(category));
    
    if(this.state.categoryTitle === ''){
        document.getElementById("categoryTitleDanger").className = "has-danger";
        document.getElementById("categoryTitleDangerMessage").innerText = "Required";
    }
    if(this.state.categoryDesc === ''){
      document.getElementById("categoryDescDanger").className = "has-danger";
      document.getElementById("categoryDescDangerMessage").innerText = "Required";
    }
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

  render(){
    return (
      <>
        <DangerNavbar />
        <Container className="tim-container">
          <div id="description-areas" style={{marginTop:"10%"}}>
            <Row>
              <Col md="12" sm="12">
                <h4>
                    <small>Category Management</small>
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
                              className={this.state.vTabs === "1" ? "active" : ""}
                              onClick={() => {
                                this.setVTabs("1");
                              }}
                            >
                              New category
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={this.state.vTabs === "2" ? "active" : ""}
                              onClick={() => {
                                this.setVTabs("2");
                              }}
                            >
                              Edit category
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={this.state.vTabs === "3" ? "active" : ""}
                              onClick={() => {
                                this.setVTabs("3");
                              }}
                            >
                              Delete category
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={this.state.vTabs === "4" ? "active" : ""}
                              onClick={() => {
                                this.setVTabs("4");
                              }}
                            >
                              View category
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
                              <Col md="12" sm="12">
                                <FormGroup id="categoryTitleDanger">
                                  <h6>
                                    Title <span className="icon-danger">*</span>
                                  </h6>
                                  <Input
                                    className="border-input"
                                    placeholder="Category title..."
                                    type="text"
                                    value={this.state.categoryTitle} 
                                    onChange={this.handleCategoryTitle}
                                  />
                                  <span 
                                    id="categoryTitleDangerMessage" 
                                    style={{color:"#f5593d", fontSize: ".8rem"}}>&nbsp;</span>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="12" sm="12">
                                <FormGroup id="categoryTitleDanger">
                                  <h6>
                                    Parent Category
                                  </h6>
                                  <Select 
                                    placeholder={'Parent Category'}
                                    options={this.state.dataCategories}
                                    onChange={this.handleCategoryParent}
                                    value = {this.state.dataCategories.find(category => category.value === this.state.selectedValue)}
                                    //styles={this.state.customStyles}
                                  /> 
                                  <span 
                                    id="categoryTitleDangerMessage" 
                                    style={{color:"#f5593d", fontSize: ".8rem"}}>&nbsp;</span>
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
                                    placeholder="Category description..."
                                    rows="8"
                                    type="textarea"
                                    value={this.state.categoryDesc} 
                                    onChange={this.handleCategoryDesc}
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
                                  onClick={this.saveCategory}
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
                                  <th className="text-center">Category Name</th>
                                  <th className="text-center">Description</th>
                                  <th className="text-center">Parent Category</th>
                                  <th className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  this.state.categories.map(
                                    category => 
                                      <tr key = {category.categoryId}>
                                          <td className="text-center"> {category.categoryId} </td>
                                          <td className="text-center"> {category.title} </td>
                                          <td className="text-center"> {category.description} </td>
                                          <td className="text-center"> {category.parentId} </td>
                                          <td className="td-actions text-center">
                                            <Button
                                              className="btn-link mr-1"
                                              color="info"
                                              data-toggle="tooltip"
                                              id="tooltip542628903"
                                              size="sm"
                                              type="button"
                                              onClick = {() => this.editCategory(category.categoryId)} 
                                            >
                                              <i className="fa fa-edit" />
                                            </Button>
                                          </td>
                                      </tr>
                                  )
                                }
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
                                  <th/>
                                  <th className="text-center">Category Name</th>
                                  <th className="text-center">Description</th>
                                  <th className="text-center">Parent Category</th>
                                  <th className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  this.state.categories.map(
                                      category => 
                                      <tr key = {category.categoryId}>
                                          <td className="text-center"> {category.categoryId} </td>
                                          <td className="text-center">
                                            <FormGroup check>
                                              <Label check>
                                                <Input
                                                  defaultValue=""
                                                  type="checkbox"
                                                  onClick = {() => this.handleListCategoryDelete(category.categoryId)} 
                                                />
                                                <span className="form-check-sign" />
                                              </Label>
                                            </FormGroup>
                                          </td> 
                                          <td className="text-center"> {category.title} </td>
                                          <td className="text-center"> {category.description} </td>
                                          <td className="text-center"> {category.parentId} </td>
                                          <td className="td-actions text-center">
                                            <Button
                                              className="btn-link mr-1"
                                              color="danger"
                                              data-toggle="tooltip"
                                              id="tooltip542628903"
                                              size="sm"
                                              type="button"
                                              onClick = {() => this.handleCategoryDelete(category.categoryId)} 
                                            >
                                              <i className="fa fa-remove" />
                                            </Button>
                                          </td>
                                      </tr>
                                  )
                                }
                              </tbody>
                            </Table>
                            <Button 
                              id="btnDelete" 
                              color="danger" 
                              outline 
                              type="button" 
                              className="mr-1" 
                              disabled={this.state.btnDisabled} 
                              onClick={this.handleClickOpen}>
                              Delete selected categroy
                            </Button>
                            <Dialog open={this.state.open} onClose={this.handleClose}>
                              <DialogTitle>
                                Delete Category ?
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  Are you sure you want to delete selected category
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={this.handleClose} color="default" autoFocus>
                                Cancel
                                </Button>
                                <Button onClick = {() => this.deleteCategory(this.state.deletedCategory)} color="danger">
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
                                  <th className="text-center">Category Name</th>
                                  <th className="text-center">Description</th>
                                  <th className="text-center">Parent Category</th>
                                  <th className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  this.state.categories.map(
                                      category => 
                                      <tr key = {category.categoryId}>
                                          <td className="text-center"> {category.categoryId} </td>
                                          <td className="text-center"> {category.title} </td>
                                          <td className="text-center"> {category.description} </td>
                                          <td className="text-center"> {category.parentId} </td>
                                          <td className="td-actions text-center">
                                            <Button
                                              className="btn-link mr-1"
                                              color="info"
                                              data-toggle="tooltip"
                                              id="tooltip542628903"
                                              size="sm"
                                              type="button"
                                              onClick = {() => this.viewCategory(category.categoryId)} 
                                            >
                                              <i className="fa fa-eye" />
                                            </Button>
                                          </td>
                                      </tr>
                                  )
                                }
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
            <div className="section">
            </div>
          </div>
        <FooterAboutUs />
      </>
    );
  }

}

// function CategoryManagement() {
//   const [categories, setCategories] = React.useState(["Food", " Drink"]);
//   const [vTabs, setVTabs] = React.useState("1");
//   const dataCategory = [
//     { label: "Mobile", value: 1},
//     { label: "Laptops", value: 2},
//     { label: "Accessories", value: 3}
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
//                   <small>Category Management</small>
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
//                             New category
//                           </NavLink>
//                         </NavItem>
//                         <NavItem>
//                           <NavLink
//                             className={vTabs === "2" ? "active" : ""}
//                             onClick={() => {
//                               setVTabs("2");
//                             }}
//                           >
//                             Edit category
//                           </NavLink>
//                         </NavItem>
//                         <NavItem>
//                           <NavLink
//                             className={vTabs === "3" ? "active" : ""}
//                             onClick={() => {
//                               setVTabs("3");
//                             }}
//                           >
//                             Delete category
//                           </NavLink>
//                         </NavItem>
//                         <NavItem>
//                           <NavLink
//                             className={vTabs === "4" ? "active" : ""}
//                             onClick={() => {
//                               setVTabs("4");
//                             }}
//                           >
//                             View category
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
//                             <Col md="12" sm="12">
//                               <FormGroup>
//                                 <h6>
//                                   Title <span className="icon-danger">*</span>
//                                 </h6>
//                                 <Input
//                                   className="border-input"
//                                   placeholder="Category title..."
//                                   type="text"
//                                 />
//                               </FormGroup>
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col md="12" sm="12">
//                               <FormGroup>
//                                 <h6>
//                                   Parent Category <span className="icon-danger">*</span>
//                                 </h6>
//                                 <Select 
//                                   placeholder={'Parent Category'}
//                                   options={dataCategory}
//                                   styles={customStyles} 
//                                   /> 
//                               </FormGroup>
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col md="12" sm="12">
//                               <FormGroup>
//                                 <h6>
//                                   Description <span className="icon-danger">*</span>
//                                 </h6>
//                                 <Input
//                                   className="textarea-limited"
//                                   maxLength="150"
//                                   placeholder="This is a textarea limited to 150 characters."
//                                   rows="8"
//                                   type="textarea"
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
//                                 <th className="text-center">Category Name</th>
//                                 <th className="text-center">Description</th>
//                                 <th className="text-center">Parent Category</th>
//                                 <th className="text-center">Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               <tr>
//                                 <td className="text-center">1</td>
//                                 <td className="text-center">Category 1</td>
//                                 <td className="text-center">Description 1</td>
//                                 <td className="text-center">Parent 1</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="info"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     href="/edit-category"
//                                   >
//                                     <i className="fa fa-edit" />
//                                   </Button>
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td className="text-center">2</td>
//                                 <td className="text-center">Category 2</td>
//                                 <td className="text-center">Description 2</td>
//                                 <td className="text-center">Parent 2</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="info"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     href="/edit-category"
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
//                                 <th/>
//                                 <th className="text-center">Category Name</th>
//                                 <th className="text-center">Description</th>
//                                 <th className="text-center">Parent Category</th>
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
//                                 <td className="text-center">Category 1</td>
//                                 <td className="text-center">Description 1</td>
//                                 <td className="text-center">Parent 1</td>
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
//                                 <td className="text-center">Category 2</td>
//                                 <td className="text-center">Description 2</td>
//                                 <td className="text-center">Parent 2</td>
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
//                             Delete selected categroy
//                           </Button>
//                           <Dialog open={open} onClose={handleClose}>
//                             <DialogTitle>
//                               Delete Category ?
//                             </DialogTitle>
//                             <DialogContent>
//                               <DialogContentText>
//                                 Are you sure you want to delete selected category
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
//                       <Container>
//                           <Table responsive striped>
//                             <thead>
//                               <tr>
//                                 <th className="text-center">#</th>
//                                 <th className="text-center">Category Name</th>
//                                 <th className="text-center">Description</th>
//                                 <th className="text-center">Parent Category</th>
//                                 <th className="text-center">Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               <tr>
//                                 <td className="text-center">1</td>
//                                 <td className="text-center">Category 1</td>
//                                 <td className="text-center">Description 1</td>
//                                 <td className="text-center">Parent 1</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="info"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     href="/view-category"
//                                   >
//                                     <i className="fa fa-eye" />
//                                   </Button>
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td className="text-center">2</td>
//                                 <td className="text-center">Category 2</td>
//                                 <td className="text-center">Description 2</td>
//                                 <td className="text-center">Parent 2</td>
//                                 <td className="td-actions text-center">
//                                   <Button
//                                     className="btn-link mr-1"
//                                     color="info"
//                                     data-toggle="tooltip"
//                                     id="tooltip542628903"
//                                     size="sm"
//                                     type="button"
//                                     href="/view-category"
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

export default CategoryManagement;
