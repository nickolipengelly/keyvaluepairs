import React from "react";
import {withContext} from "../API/UserAPI";

import "../style/login.css";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    };

    clearInputs = () => {
        this.setState({
            email: "",
            password: ""
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/Matches"))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.email} name={"email"} type="text" placeholder={"Email"}/>
                <input onChange={this.handleChange} value={this.state.password} type="text" name="password" placeholder={"Password"}/>
                <button> Login</button>
            </form>
        );
    }
}




export default withContext(Login);
