//import react 
import React from 'react'
import {Route, Switch} from "react-router-dom"

//import elements
import Home from "./Home";
import Profile from "./Profile";
import Matches from "./Matches";
import AccountCreate from './AccountCreate';
import LogIn from './LogIn'



function SwitchPage(){
    return (
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Matches" component={Matches} />
        <Route path="/AccountCreate" component={AccountCreate} />
        <Route path="/LogIn"  component={LogIn} />
      </Switch>
    )
}
export default SwitchPage; 