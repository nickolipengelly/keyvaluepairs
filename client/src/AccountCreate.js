
import React,{Component} from "react";
import {withContext} from "./API/UserAPI";



import "./style/accountCreate.css";


class AccountCreate extends Component {
    constructor(){
      super();
      this.state = {
          fName: '',
          lName: '',
          email: "",
          password: '',
          err: false,
      }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    };

    clearInputs = () =>{
        this.setState({
            email:"",
            password:"",
            fName:"",
            lName:"",
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
             this.props.accountCreate(this.state)
            .then(()=> this.props.history.push("./Profile.js"))
    }
    validateForm(){
        return this.state.email.length >= 2 && this.state.password.length >= 2
    }

  render(){
  return (
      <div className="accountCreateDiv">
        <form className="account" onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <input type="text" value={this.state.fName} name='fName' onChange={this.handleChange}/>
          <label>Last Name: </label>
          <input type="text" name='lName' value={this.state.lName} onChange={this.handleChange}/>
          <label>Email: </label>
          <input type="email" name='email' value={this.state.email} onChange={this.handleChange}/>
          <label>Password: </label>
          <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
          <label>Confirm Password: </label>
          <input type="password" />
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default withContext(AccountCreate);
