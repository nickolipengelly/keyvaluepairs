import React from "react";

//import react packages

import "./style/app.css";

//import elements
import Nav from "./Nav";
import Header from "./Header";
import Switch from "./SwitchPage";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Switch />
    </div>
  );
}

export default App;
