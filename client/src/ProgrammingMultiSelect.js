import React from "react";
import Select from "react-select";

import "./style/programmingMultiSelect.css"

const options = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "c#", label: "C Sharp" },
  { value: "java", label: "Java" },
  { value: "ruby", label: "Ruby" },
  { value: "python", label: "Python" },
  { value: "sql", label: "SQL" }
];

//changed selectedOption from null to an array
// changed selectedOption to selectedProgrammingOption
class ProgrammingMultiSelect extends React.Component {
  state = {
    selectedProgrammingOption: []
  };
  handleChange = selectedProgrammingOption => {
    this.setState({ selectedProgrammingOption });
    console.log(`Option selected:`, selectedProgrammingOption);
  };
  render() {
    const { selectedProgrammingOption } = this.state;

    return (
      <div className="programSelect">
        <label>Programming Language Select</label>
      <Select
        value={selectedProgrammingOption}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
        placeholder={"Please select your preferred programming language(s)"}
      />
      </div>
    );
  }
}

export default ProgrammingMultiSelect;
