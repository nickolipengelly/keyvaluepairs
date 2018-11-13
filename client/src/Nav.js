import React from "react";
import { Link } from "react-router-dom";



import "./style/nav.css";

function Nav() {
  return (
    <nav className="nav">
      <Link className="homeLink" to="/">
        {" "}
        Home{" "}
      </Link>
      <Link className="profileLink" to="/Profile">
        {" "}
        Profile{" "}
      </Link>
      <Link className="matchesLink" to="/Matches">
        {" "}
        Matches{" "}
      </Link>
    </nav>
   
  );
}

export default Nav;
