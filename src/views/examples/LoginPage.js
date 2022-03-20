import React, { Component } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";

// core components
import UserService from "services/UserService";
import { FormGroup } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class LoginPage extends Component{
  constructor(props){
      super(props)

      this.state = {
          isRevealPassword : false,
          username: '',
          password: '' 
      }

      this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
      this.changePasswordHandler = this.changePasswordHandler.bind(this);
      this.loginUser = this.loginUser.bind(this);
  }

  loginUser = (e) => {
    e.preventDefault();
    let user = {username: this.state.username, password: this.state.password};
    console.log('user => ' + JSON.stringify(user));
    
    if(this.state.username === ''){
        document.getElementById("usernameDanger").className = "has-danger";
        document.getElementById("usernameDangerMessage").innerText = "Required";
    }

    if(this.state.loginPassword === ''){
      document.getElementById("passwordDanger").className = "has-danger";
      document.getElementById("passwordDangerMessage").innerText = "Required";
    }

    // if(this.state.username !== '' && this.state.password){
    //     UserService.createUser(user).then(res => {
    //       this.props.history.push('/presentation');
    //     })
    //     .catch(err => {
    //       if (err.response && err.response.data) {
    //         if(err.response.data.message === 'Username is already taken'){
    //           document.getElementById("usernameDanger").className = "has-danger";
    //           document.getElementById("usernameDangerMessage").innerHTML = err.response.data.message;
    //         }
    //         if(err.response.data.message === 'Email is already taken'){
    //           document.getElementById("emailDanger").className = "has-danger";
    //           document.getElementById("emailDangerMessage").innerHTML = err.response.data.message;
    //         }
    //         console.log(err.response.data.message)
    //       }
    //     });
    //   }
  }

  changeUsernameHandler = (event) => {
    this.setState({username: event.target.value});
    document.getElementById("usernameDanger").className = "";
    document.getElementById("usernameDangerMessage").innerHTML = "&nbsp;";
  }
  changePasswordHandler = (event) => {
    this.setState({password: event.target.value});
    document.getElementById("passwordDanger").className = "";
    document.getElementById("passwordDangerMessage").innerHTML = "&nbsp;";
  }

  togglePassword = event => {
    this.setState({isRevealPassword: !this.state.isRevealPassword});
  }

  render() {
    const {isRevealPassword, password} = this.state;

    return (
      <>
        <ColorNavbar />
        <div className="wrapper">
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/sections/bruno-abatti.jpg").default +
                ")",
            }}
          >
            <div className="filter" />
            <Container style={{marginTop: "12%"}}>
              <Row>
                <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
                  <Card className="card-register">
                    <CardTitle tag="h3" style={{marginBottom: "10%"}}>Welcome</CardTitle>
                    <Form className="register-form">

                      <FormGroup id="usernameDanger">
                        <Input 
                          placeholder="Username" 
                          className="no-border"
                          type="text" 
                          value={this.state.username} 
                          onChange={this.changeUsernameHandler}/>
                        <span 
                          id="usernameDangerMessage" 
                          style={{color:"#fff", fontSize: ".8rem"}}>&nbsp;</span>
                      </FormGroup>

                      <FormGroup id="passwordDanger">
                          <div style={{position: "relative"}}>
                          <Input 
                            placeholder="Password" 
                            className="no-border"
                            type={isRevealPassword ? "text" : "password"} 
                            value={this.state.password}
                            onChange={this.changePasswordHandler}/>
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
                            style={{color:"#fff", fontSize: ".8rem"}}>&nbsp;</span>
                        </FormGroup>

                      <Button block className="btn-round" color="danger" onClick={this.loginUser}>
                        Login
                      </Button>
                      <br />
                    </Form>
                    <div className="forgot">
                      <p style={{fontSize: ".8rem", marginTop: "-5%"}}>
                        No account?{" "}
                        <a href="/register-page" style={{ color: "white" }}>
                          Register now
                        </a>
                      </p>
                    </div>
                    <div className="forgot">
                      <Button
                        className="btn-link"
                        style={{ color: "white" }}
                        href="/reset-pass"
                      >
                        Forgot password?
                      </Button>
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

// function LoginPage() {
//   document.documentElement.classList.remove("nav-open");
//   React.useEffect(() => {
//     document.body.classList.add("login-page");
//     document.body.classList.add("full-screen");
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//     return function cleanup() {
//       document.body.classList.remove("login-page");
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
//               require("assets/img/sections/bruno-abatti.jpg").default +
//               ")",
//           }}
//         >
//           <div className="filter" />
//           <Container>
//             <Row>
//               <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
//                 <Card className="card-register">
//                   <CardTitle tag="h3">Welcome</CardTitle>
//                   <Form className="register-form">
//                     <label>Username</label>
//                     <Input
//                       className="no-border"
//                       placeholder="Username"
//                       type="text"
//                     />
//                     <label>Password</label>
//                     <Input
//                       className="no-border"
//                       placeholder="Password"
//                       type="password"
//                     />
//                     <Button block className="btn-round" color="danger">
//                       Login
//                     </Button>
//                     <br />
//                   </Form>
//                   <div className="forgot">
//                     <p>
//                       No account?{" "}
//                       <a href="/register-page" style={{ color: "white" }}>
//                         Register now
//                       </a>
//                     </p>
//                   </div>
//                   <div className="forgot">
//                     <Button
//                       className="btn-link"
//                       style={{ color: "white" }}
//                       href="/reset-pass"
//                     >
//                       Forgot password?
//                     </Button>
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

export default LoginPage;
