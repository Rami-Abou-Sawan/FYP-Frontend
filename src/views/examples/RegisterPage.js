import React, { Component } from "react";

// reactstrap components
import { Button, Card, CardTitle, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";
import UserService from "services/UserService";
import { FormGroup } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import validator from "validator";

class RegisterPage extends Component{
  constructor(props){
      super(props)

      this.state = {
          isRevealPassword : false,
          username: '',
          loginPassword: '',
          confirmLoginPassword: '', 
          email: ''        
      }

      this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
      this.changePasswordHandler = this.changePasswordHandler.bind(this);
      this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
      this.changeEmailHandler = this.changeEmailHandler.bind(this);
      this.registerUser = this.registerUser.bind(this);
  }

  registerUser = (e) => {
    e.preventDefault();
    let user = {username: this.state.username, loginPassword: this.state.loginPassword, email: this.state.email};
    console.log('user => ' + JSON.stringify(user));
    
    if(this.state.username === ''){
        document.getElementById("usernameDanger").className = "has-danger";
        document.getElementById("usernameDangerMessage").innerText = "Required";
    }
    
    if(this.state.email === ''){
      document.getElementById("emailDanger").className = "has-danger";
      document.getElementById("emailDangerMessage").innerText = "Required";
    }

    if(this.state.loginPassword === ''){
      document.getElementById("passwordDanger").className = "has-danger";
      document.getElementById("passwordDangerMessage").innerText = "Required";
    }

    if(this.state.confirmLoginPassword === ''){
      document.getElementById("confirmPasswordDanger").className = "has-danger";
      document.getElementById("confirmPasswordDangerMessage").innerText = "Required";
    }

    if(this.state.confirmLoginPassword !== '' && this.state.loginPassword !== ''){
      if(this.state.loginPassword !== this.state.confirmLoginPassword){
        document.getElementById("passwordDanger").className = "has-danger";
        document.getElementById("passwordDangerMessage").innerText = "Password doesn't match";
        document.getElementById("confirmPasswordDanger").className = "has-danger";
        document.getElementById("confirmPasswordDangerMessage").innerText = "Password doesn't match";
      }
      else{
        document.getElementById("passwordDanger").className = "";
        document.getElementById("passwordDangerMessage").innerHTML = "&nbsp;";
        document.getElementById("confirmPasswordDanger").className = "";
        document.getElementById("confirmPasswordDangerMessage").innerHTML = "&nbsp;";
      }
    }

    if(this.state.username !== '' && this.state.loginPassword !== '' && this.state.confirmLoginPassword !== '' && this.state.email !== ''){
      if(this.state.loginPassword !== this.state.confirmLoginPassword){
        document.getElementById("passwordDanger").className = "has-danger";
        document.getElementById("passwordDangerMessage").innerText = "Password doesn't match";
        document.getElementById("confirmPasswordDanger").className = "has-danger";
        document.getElementById("confirmPasswordDangerMessage").innerText = "Password doesn't match";
      }
      else if(!validator.isStrongPassword(this.state.loginPassword, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })){
        document.getElementById("passwordDanger").className = "has-danger";
        document.getElementById("passwordDangerMessage").innerText = "Weak Password [A-Z, a-z, 0-9, !@?]";
      }
      else if (!validator.isEmail(this.state.email)) {
        document.getElementById("emailDanger").className = "has-danger";
        document.getElementById("emailDangerMessage").innerHTML = "Invalid email address";
      }
      else{
        UserService.createUser(user).then(res => {
          this.props.history.push('/login-page');
        })
        .catch(err => {
          if (err.response && err.response.data) {
            if(err.response.data.message === 'Username is already taken'){
              document.getElementById("usernameDanger").className = "has-danger";
              document.getElementById("usernameDangerMessage").innerHTML = err.response.data.message;
            }
            if(err.response.data.message === 'Email is already taken'){
              document.getElementById("emailDanger").className = "has-danger";
              document.getElementById("emailDangerMessage").innerHTML = err.response.data.message;
            }
            console.log(err.response.data.message)
          }
        });
      }
    }
    
  }

  changeUsernameHandler = (event) => {
    this.setState({username: event.target.value});
    document.getElementById("usernameDanger").className = "";
    document.getElementById("usernameDangerMessage").innerHTML = "&nbsp;";
  }
  changePasswordHandler = (event) => {
    this.setState({loginPassword: event.target.value});
    document.getElementById("passwordDanger").className = "";
    document.getElementById("passwordDangerMessage").innerHTML = "&nbsp;";
  }
  changeConfirmPasswordHandler = (event) => {
    this.setState({confirmLoginPassword: event.target.value});
    document.getElementById("confirmPasswordDanger").className = "";
    document.getElementById("confirmPasswordDangerMessage").innerHTML = "&nbsp;";
  }
  changeEmailHandler = (event) => {
    this.setState({email: event.target.value});
    document.getElementById("emailDanger").className = "";
    document.getElementById("emailDangerMessage").innerHTML = "&nbsp;";
  }

  togglePassword = event => {
    this.setState({isRevealPassword: !this.state.isRevealPassword});
  }

  render() {
    const {isRevealPassword, loginPassword, confirmLoginPassword} = this.state;
    const validate = (value) => {
      if(value != ''){
        if (validator.isStrongPassword(value, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
          document.getElementById("passwordDanger").className = "";
          document.getElementById("passwordDangerMessage").innerHTML = "&nbsp;";
        } else {
          document.getElementById("passwordDanger").className = "has-danger";
          document.getElementById("passwordDangerMessage").innerText = "Weak Password [A-Z, a-z, 0-9, !@?]";
        }
      }
    }
    const validateEmail = (e) => {
      var email = e.target.value
      if(e != ''){
        if (validator.isEmail(email)) {
          document.getElementById("emailDanger").className = "";
          document.getElementById("emailDangerMessage").innerHTML = "&nbsp;";
        } else {
          document.getElementById("emailDanger").className = "has-danger";
          document.getElementById("emailDangerMessage").innerHTML = "Invalid email address";
        }
      }
    }
    return (
      <>
        <ColorNavbar />
        <div className="wrapper">
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/sections/soroush-karimi.jpg").default +
                ")",
            }}
          >
            <div className="filter" />
            
            <Container style={{marginTop: "12%"}}>
              <Row>
                <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="fa fa-umbrella" />
                    </div>
                    <div className="description">
                      <h3>Join us</h3>
                      <p>
                        Create an account here in order to have the best shopping
                        experience
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="fa fa-user-secret" />
                    </div>
                    <div className="description">
                      <h3>We value your privacy</h3>
                      <p>
                        We guarantee full privacy and security for your personal
                        information.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                  <Card className="card-register" style={{backgroundColor:"#f9f9f9"}}>
                    <CardTitle className="text-center" tag="h3" style={{color: "black", marginBottom: "10%"}}>
                      Register
                    </CardTitle>
                    <div className="division" />
                      <Form className="register-form">

                        <FormGroup id="usernameDanger">
                          <Input 
                            placeholder="Username" 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.changeUsernameHandler}/>
                          <span 
                            id="usernameDangerMessage" 
                            style={{color:"#f5593d", fontSize: ".8rem"}}>&nbsp;</span>
                        </FormGroup>
                        
                        <FormGroup id="emailDanger">
                          <Input 
                            placeholder="Email" 
                            type="text" 
                            value={this.state.email} 
                            onBlur={(e) => validateEmail(e)}
                            onChange={this.changeEmailHandler}/>
                          <span 
                            id="emailDangerMessage" 
                            style={{color:"#f5593d", fontSize: ".8rem"}}>&nbsp;</span>
                        </FormGroup>

                        <FormGroup id="passwordDanger">
                          <div style={{position: "relative"}}>
                          <Input 
                            placeholder="Password" 
                            type={isRevealPassword ? "text" : "password"} 
                            value={this.state.loginPassword}
                            onChange={this.changePasswordHandler}
                            onBlur={(e) => validate(e.target.value)}/>
                            <span onClick={this.togglePassword} ref={this.iconRevealPassword} style={{position: "absolute", top: "10px", right: "5px",}}>
                              <span>
                                {
                                  isRevealPassword ? 
                                  <FontAwesomeIcon icon={faEye} style={{color:"black"}} /> :
                                  <FontAwesomeIcon icon={faEyeSlash} style={{color:"black"}} />
                                }
                              </span>
                            </span>
                          </div>
                          <span 
                            id="passwordDangerMessage" 
                            style={{color:"#f5593d", fontSize: ".8rem"}}>&nbsp;</span>
                        </FormGroup>

                        <FormGroup id="confirmPasswordDanger">
                          <Input 
                            placeholder="Confirm Password" 
                            type={isRevealPassword ? "text" : "password"} 
                            value={this.state.confirmLoginPassword} 
                            onChange={this.changeConfirmPasswordHandler}/>
                          <span 
                            id="confirmPasswordDangerMessage" 
                            style={{color:"#f5593d", fontSize: ".8rem"}}>&nbsp;</span>
                        </FormGroup>

                      <Button block className="btn-round" color="default" onClick={this.registerUser}>
                        Register
                      </Button>
                    </Form>
                    <div className="login">
                      <p style={{color: "black", fontSize: ".8rem", marginTop: ".5%"}}>
                        Already have an account?{" "}
                        <a href="/login-page" style={{color: "dodgerblue"}}>
                          Log in
                        </a>
                      </p>
                    </div>
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
}


// function RegisterPage() {
//   document.documentElement.classList.remove("nav-open");
//   React.useEffect(() => {
//     document.body.classList.add("register-page");
//     document.body.classList.add("full-screen");
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//     return function cleanup() {
//       document.body.classList.remove("register-page");
//       document.body.classList.remove("full-screen");
//     };
//   });
//   return (
//     <>
//       <ColorNavbar />
//       <div className="wrapper">
//         <div
//           className="page-header"
//           style={{
//             backgroundImage:
//               "url(" +
//               require("assets/img/sections/soroush-karimi.jpg").default +
//               ")",
//           }}
//         >
//           <div className="filter" />
//           <Container>
//             <Row>
//               <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
//                 <div className="info info-horizontal">
//                   <div className="icon">
//                     <i className="fa fa-umbrella" />
//                   </div>
//                   <div className="description">
//                     <h3>Join us</h3>
//                     <p>
//                       Create an account here in order to have the best shopping
//                       experience
//                     </p>
//                   </div>
//                 </div>
//                 <div className="info info-horizontal">
//                   <div className="icon">
//                     <i className="fa fa-user-secret" />
//                   </div>
//                   <div className="description">
//                     <h3>We value your privacy</h3>
//                     <p>
//                       We guarantee full privacy and security for your personal
//                       information.
//                     </p>
//                   </div>
//                 </div>
//               </Col>
//               <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
//                 <Card className="card-register">
//                   <CardTitle className="text-center" tag="h3">
//                     Register
//                   </CardTitle>
//                   <div className="division" />
//                   <Form className="register-form">
//                     <Input placeholder="Username" type="text" />
//                     <Input placeholder="Email" type="text" />
//                     <Input placeholder="Password" type="password" />
//                     <Input placeholder="Confirm Password" type="password" />
//                     <Button block className="btn-round" color="default">
//                       Register
//                     </Button>
//                   </Form>
//                   <div className="login">
//                     <p>
//                       Already have an account?{" "}
//                       <a href="/login-page">
//                         Log in
//                       </a>
//                     </p>
//                   </div>
//                 </Card>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//         <FooterAboutUs />
//       </div>
//     </>
//   );
// }

export default RegisterPage;