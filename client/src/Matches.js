import React from "react";

import {withContext} from "./API/UserAPI";
import "./style/matches.css";


function Matches(props) {
  const withContext = props.results.map((results) => {
  return (
    <div>
     <div> test src ={results}</div>
    </div>
  );
});
return <div className="test">{withContext}</div>
}
export default withContext(Matches);
