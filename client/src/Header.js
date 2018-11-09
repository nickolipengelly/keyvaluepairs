import React from "react";

import "./style/header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerGrid">
      <div className="header">&#123;KeyValue: Pairs&#125;</div>
      <Link className="login" to="./Login">
        Log In
      </Link>
    </div>
  );
}

export default Header;
