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
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({
            user
        })
    }

    loginUser(e) {
        e.preventDefault();
        login(this.state.user)
        .then(() => {
            this.props.history.push("/fridge")
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
