import React from "react";

import "./style/login.css";

//import withcontext

//clearinputs

//push to welcome page

function LogIn() {
  return (
    <form className="logInForm">
      <label htmlFor="userName">Username: </label>
      <input type="text" />
      <label htmlFor="password">Password: </label>
      <input type="password" name="" id="" />
      <button onClick="logIn"> Login </button>
    </form>
  );
}

//login get loging info
//get todo's return response

export default LogIn;
