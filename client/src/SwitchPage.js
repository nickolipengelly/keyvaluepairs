//import react
import React from "react";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute"

//import elements
import Home from "./Home";
import Profile from "./Profile";
import Matches from "./Matches.js";
import Matchmaker from "./Matchmaker"

import AccountCreate from "./AccountCreate.js";


function SwitchPage() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute path="/Profile" component={Profile} />
      <ProtectedRoute path="/Matches" component={Matches} />
      <ProtectedRoute path="/Matchmaker" component={Matchmaker} />
      <Route path="/AccountCreate" component={AccountCreate} />
    </Switch>
  );
}

export default SwitchPage;
