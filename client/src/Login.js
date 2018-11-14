

import React from "react";
import {withRouter} from "react-router-dom";
//import modal
import Rodal from "rodal";
import "rodal/lib/rodal.css";

//import styles
import "./style/login.css";

//import withContext
import { withContext } from "./API/UserAPI";

//push to welcome page
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //clearinputs
  clearInputs = () => {
    this.setState({
      email: "",
      password: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .login(this.state)
      .then(() => this.props.history.push("./Matches.js"));
  };

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="loginDiv">
        <button className="loginButton" onClick={this.show.bind(this)}>
          Log In
        </button>
        <Rodal
          className="rodal"
          visible={this.state.visible}
          onClose={this.hide.bind(this)}
        >
          <div>
            <form className="logInForm" onSubmit={this.handleSubmit}>
              <label htmlFor="Email">E-Mail:</label>
                <input onChange={this.handleChange} value={this.state.email} name={"email"} type="text" placeholder={"Email"}/>
              <label htmlFor="password">Password: </label>
                <input onChange={this.handleChange} value={this.state.password} type="text" name="password" placeholder={"Password"}/>
              <button className="submitLogin">
                {" "}
                Login{" "}
              </button>
            </form>
          </div>
        </Rodal>
      </div>
    );
  }
}

//login get loging info
//get todo's return response

export default withContext(withRouter(Login));
