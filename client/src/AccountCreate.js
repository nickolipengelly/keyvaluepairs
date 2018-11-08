import React,{Component} from "react";

//push to axios
import "./style/accountCreate.css";

export default class AccountCreate extends Component {
    constructor(props){
      super(props);
      this.state = {
        fName: '',
          lName: '',
          email: '',
          password: '',
          err: false,
      }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(
        {target: {name, value}}) {
        this.setState({[name]: value})
    }
    handleSubmit(){
      return e => {
        e.preventDefault();
        if(this.validateForm()){
          return this.props.history.push('/login')
        }else{
          this.setState({err: true})
        }
      }
    }
    validateForm(){
        return this.state.email.length >= 2 && this.state.password.length >= 2 && this.state.password.match(/[0-9]+]/g)
    }

  render(){
  return (
      <div>
        <form className="account" onSubmit={this.handleSubmit(this.state)}>
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

