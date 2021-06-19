import React, { Component } from "react";
import { LoginComponent } from "./LoginComponent";

export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email : '',
            password : ''
        }
        this.submitData = this.submitData.bind(this)
    }

handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
}
submitData() {
    const user = {
        email : this.state.email,
        password : this.state.password
    }
    console.log(user);
}
    
  render() {
    return <LoginComponent 
        email={this.state.email}
        password={this.state.password}
        handleChange={this.handleChange}
        submitData={this.submitData}
    />;
  }
}
