import React from 'react'

//import react packages

//import router elements
import {Switch} from "react-router-dom"

//import elements
import Nav from "./Nav"
import Header from "./Header";



function App(){ 
    return (
        <div>
            <Header />
            <Nav />   
            <Switch/>   
       </div>
    ) 
}

export default App; 