import React from "react";

import "./style/header.css";


import Login from "./Login";


function Header() {
  return (
    <div>
    <div className="headerGrid">
      <div className="header">&#123;KeyValue: Pairs&#125;</div>
      <Login />
    </div>


  );
}

export default Header;
