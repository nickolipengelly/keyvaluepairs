import React from "react";
import Rodal from "rodal";

import "rodal/lib/rodal.css";

import "./style/login.css";

//import withcontext

//clearinputs

//push to welcome page
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="loginDiv">
        <button className="loginButton" onClick={this.show.bind(this)}>Log In</button>
        <Rodal className="rodal" visible={this.state.visible} onClose={this.hide.bind(this)}>
          <div>
            <form className="logInForm">
              <label htmlFor="userName">Username: </label>
              <input type="text" />
              <label htmlFor="password">Password: </label>
              <input type="password" name="" id="" />
              <button className="submitLogin" onClick="logIn"> Login </button>
            </form>
          </div>
        </Rodal>
      </div>
    );
  }
}

//login get loging info
//get todo's return response

export default LogIn;
