import React from "react";
import Select from "react-select";

const options = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "c#", label: "C Sharp" },
  { value: "java", label: "Java" },
  { value: "ruby", label: "Ruby" },
  { value: "python", label: "Python" },
  { value: "sql", label: "SQL" }
  // {value: '', label:'Mandarin'}
  // {value: 'c#', label:'Mandarin'}
  // {value: 'c#', label:'Mandarin'}
];

//changed selectedOption from null to an array

class ProgrammingMultiSelect extends React.Component {
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
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
        placeholder={"Please select your preferred programming language(s)"}
      />
    );
  }
}

export default ProgrammingMultiSelect;
