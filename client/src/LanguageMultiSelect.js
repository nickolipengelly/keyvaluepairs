import React from "react";
import Select from "react-select";

const options = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "pashto", label: "Pashto" },
  { value: "mandarin", label: "Mandarin" }
];

//changed selectedOption from null to an array

class LanguageMultiSelect extends React.Component {
  state = {
    selectedOption: []
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <label> Spoken Language Select: </label>
        <Select
          value={selectedOption}
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
