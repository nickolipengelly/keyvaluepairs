import React from "react";

//import react packages

//import router elements
import { Switch, Route } from "react-router-dom";

//import elements
import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
import Matches from "./Matches";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Matches" component={Matches} />
      </Switch>
    </div>
  );
}

export default App;
