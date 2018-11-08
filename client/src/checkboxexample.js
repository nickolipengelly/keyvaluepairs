

//   handleSelections = ({ target: { value, checked } }) => {
//     this.setState(ps => {
//       const set = new Set(ps.selections);
//       if (checked) set.add(value);
//       else set.delete(value);
//       return { selections: Array.from(set) };
//     });
//   };



// 0
// <input
//   onChange={this.handleSelections}
//   checked={this.state.selections.includes("0")}
//   value="0"
//   type="checkbox"
// />
// 1
// <input
//   onChange={this.handleSelections}
//   checked={this.state.selections.includes("1")}
//   value="1"
//   type="checkbox"
// />
// 2
// <input
//   onChange={this.handleSelections}
//   checked={this.state.selections.includes("2")}
//   value="2"
//   type="checkbox"
// />
// <label htmlFor={"avatar"}>Profile Picture: </label>
// <input
//   ref={this.uploader}
//   type="file"
//   id="avatar"
//   name="avatar"
//   accept="image/png,image/jpeg"
// />