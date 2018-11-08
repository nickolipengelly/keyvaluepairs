import React, { Component, createcontext } from "react";

const { Consumer, Provider } = createcontext();

export default class AuthContext extends Component {
  constructor() {
    super();
    // define your state to have the token and the user data
  }

  //all AUTH and user related methods go here

  render() {
    //define the object thay represents the 'global' user state

    return <Provider>{this.props.children}</Provider>;
  }
}
