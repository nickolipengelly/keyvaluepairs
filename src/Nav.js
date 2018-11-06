import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="./Profile">Profile</Link>
      <Link to="./Matches">Matches</Link>
    </nav>

  );
}

export default Nav;
