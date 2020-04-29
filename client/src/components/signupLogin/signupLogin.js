/*************************/
/*   Import Statements   */
/*************************/
import React, {Component} from "react";
import { Button, Card } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import './signupLogin.css';


/*************************/
/*  Class Implementation */
/*************************/
export class SignupLogin extends Component {
  /* State is currently empty for now, although I don't believe it will be needed later
  */
  constructor() {
    super();
    this.state = {
      password: "",
      found: true,
      redirect: false
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  };

  render() {
    if (this.state.redirect === true){
      return <Redirect to=''/>
    }

    return (
      <div id="signingUp" style={{display: "flex", "justifyContent": "center", "marginTop": "60px"}}>
        <Card style={{color:"black", width: '30rem', "background-color": "rgba(245, 245, 245, .45)", "borderStyle": "solid", "borderWidth": "1px", "borderColor": "#FFF4F9", "border-radius": "15px"}}>
          <Card.Body>
            {this.props.user === "false" ?
              (<div>
                <h4 id="LoginPageTitle" className="card-title">Login</h4>
                {this.state.found === true ?
                  <div></div>
                  :
                  "Incorrect password."
                }
                <form id="employeeLoginForm" onSubmit={this.login}>
                  Password: <br/>
                  <input type="password" name="password" autoComplete="password" value={this.state.password} onChange={this.handleChange}/>
                  <br/><br/>

                  <Button id="loginButton" variant="outline-dark" size="lg" onClick={this.login}>Submit</Button>

                </form><br/><Button variant="outline-dark" size="lg"><a href="/">Return To Menu</a></Button>
              </div>): (<div>
                <Button id="logoutbutton" variant="outline-dark" size="lg" onClick={this.logout}>Logout</Button> </div>)}
          </Card.Body>
        </Card>
      </div>
    );
  }

  login = () => {
    fetch('/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: this.state.password
      })
    }).then(async (response) => {
      console.log(response);
      if (response.status === 200) {
        this.setState({redirect: true});
        this.props.login();
      } else {
        this.setState({found: false});
      }
    });
  };

  logout = () => {
    this.props.logout()
  }

}

/*************************/
/*   Export Statements   */
/*************************/
export default SignupLogin;
