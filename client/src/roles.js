import { Component, React } from "react";

class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: Boolean
    };
    this.handleSelections = this.handleSelections.bind(this);
  }

  handleSelections = ({ target: { value, checked } }) => {
    this.setState(ps => {
      const set = new Set(ps.selections);
      if (checked) set.add(value);
      else set.delete(value);
      return { selections: Array.from(set) };
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleSelections}
          checked={this.state.roles.includes("Student")}
          type="checkbox"
          name="Student"
          id="student"
        />
        <input
          onChange={this.handleSelections}
          checked={this.state.role.includes("Teacher")}
          type="checkbox"
          name="Teacher"
          id="teacher"
        />
      </div>
    );
  }
}

export default Roles;
