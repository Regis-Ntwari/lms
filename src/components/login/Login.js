import { createBrowserHistory } from "history";
import React, { Component } from "react";
import authService from "../../services/auth.service";
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
    const history = createBrowserHistory();
    authService.login(this.state.email, this.state.password)
                    .then((Response) => {
                        if(Response.data) {
                            history.push('/lesson')
                            window.location.reload();
                        }
                    })

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
