import React from "react";

import "./style/header.css";

import LogIn from "./LogIn";

function Header() {
  return (
    <div className="headerGrid">
      <div className="header">&#123;KeyValue: Pairs&#125;</div>
      <LogIn />
    </div>
  );
}

export default Header;
