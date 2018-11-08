import React from "react";

import "./style/programmingPick.css";

function ProgrammingPick(props) {
  //allow multiple selects in select
  var multiSelect = {};
  function init() {
    var s = document.getElementsByTagName("select");
    for (var i = 0; i < s.length; i++) {
      if (s[i].multiple) {
        var n = s[i].name;
        multiSelect[n] = [];
        for (var j = 0; j < s[i].options.length; j++) {
          multiSelect[n][j] = s[i].options[j].selected;
        }
        s[i].onchange = changeMultiSelect;
      }
    }
  }
  function changeMultiSelect() {
    var n = this.name;
    for (var i = 0; i < this.options.length; i++) {
      if (this.options[i].selected) {
        multiSelect[n][i] = !multiSelect[n][i];
      }
      this.options[i].selected = multiSelect[n][i];
    }
  }
  window.onload = init;

  return (
    <select
      onChange={props.handleChange}
      value={props.programmingLanguage}
      name="programmingLanguage"
      id="programmingLanguage"
      multiple
    >
      <option value="CSS">CSS</option>
      <option value="HTML">HTML</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Csharp">C#</option>
      {/*<option value=""></option>*/}
      {/*<option value=""></option>*/}
      {/*<option value=""></option>*/}
      
    </select>
  );
}
export default ProgrammingPick;
