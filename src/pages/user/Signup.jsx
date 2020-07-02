import React, { Component } from 'react';
import {signup} from '../../utilities/auth';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.signupUser = this.signupUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        user: {},
        error: null
    }

    handleChange(e) {
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({
            user
        })
    }

    signupUser(e) {
        e.preventDefault();
        signup(this.state.user)
        .then(() => {
            this.props.history.push("/fridge")
        })
    }

    render() {
        return (
            <form>
                    <input type="text" onChange={this.handleChange} name="username" placeholder="username" />
                    <input type="text" onChange={this.handleChange} name="firstname" placeholder="firstname" />
                    <input type="text" onChange={this.handleChange} name="lastname" placeholder="lastname" />
                    <input type="text" onChange={this.handleChange} name="postcode" placeholder="postcode" />
                    <input type="text" onChange={this.handleChange} name="email" placeholder="email" />
                    <input type="password" onChange={this.handleChange} name="password" placeholder="password" />
                    <button onClick={this.signupUser}>Signup</button>
                
                {
                    this.state.error && 
                    <p>{this.state.error.message || "error"}</p>
                }
            </form>
        )
    }
}