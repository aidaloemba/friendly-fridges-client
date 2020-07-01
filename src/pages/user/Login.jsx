import React, { Component } from 'react';
import {login} from '../../utilities/auth';

export default class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    state = {
        user: {
            email: "",
            password: ""
        },
        error: null
    }

    handleChange(e) {
        let userCopy = {...this.state.user};
        userCopy[e.target.name] = e.target.value;
        this.setState({
            user: userCopy
        })
    }

    loginUser(e) {
        login(this.state.user)
        .then(() => {
            this.setState({
                error: null
            }, () => {
            this.props.history.push("/username/fridge")
            })
        })
        .catch((error) => {
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        return (
            <form>
                    <input type="text" onChange={this.handleChange} name="email" placeholder="email" />
                    <input type="password" onChange={this.handleChange} name="password" placeholder="password" />
                    <button onClick={this.loginUser}>Log in</button>
                
                {
                    this.state.error && 
                    <p>{this.state.error.message || "error"}</p>
                }
            </form>
        )
    }
}
