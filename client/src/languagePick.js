import React from 'react'

import "./style/languagePick.css"

// allow multiple selects in select field
var multiSelect = {};
    function init() {
      var s = document.getElementsByTagName('select');
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
      for (var i=0; i < this.options.length; i++) {
        if (this.options[i].selected) {
          multiSelect[n][i] = !multiSelect[n][i];
        }
        this.options[i].selected = multiSelect[n][i];
      }
    }
    window.onload = init;

    //select language

function LanguagePick(props) {

        return (
            <select onChange={props.handleChange} value={props.spokenLanguage} name="spokenLanguage" id="spokenLanguage" multiple>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Pashto">Pashto</option>
                <option value="Mandarin">Mandarin</option>
            </select>


        )
    }

export default LanguagePick;