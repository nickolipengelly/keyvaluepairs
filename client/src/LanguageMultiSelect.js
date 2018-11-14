import React from "react";
import Select from "react-select";

import "./style/languageMultiSelect.css"

const options = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "pashto", label: "Pashto" },
  { value: "mandarin", label: "Mandarin" }
];

//changed selectedOption from null to an array

class LanguageMultiSelect extends React.Component {
  state = {
    selectedLanguageOption: []
  };
  handleChange = selectedLanguageOption => {
    this.setState({ selectedLanguageOption });
    console.log(`Option selected:`, selectedLanguageOption);
  };
  render() {
    const { selectedLanguageOption } = this.state;

    return (
      <div className="languageStyle">
        <label> Spoken Language Select: </label>
        <Select
          value={selectedLanguageOption}
          onChange={this.handleChange}
          options={options}
          isMulti={true}
          placeholder={"Please select any languages you may speak"}
        />
      </div>
    );
  }
}

export default LanguageMultiSelect;
