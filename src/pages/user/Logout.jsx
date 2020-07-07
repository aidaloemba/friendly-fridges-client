import React, { Component } from 'react';
import {logout} from '../../utilities/auth';

export default class Logout extends Component {

    logoutUser(e) {
        logout(this.state.user)
        .then(() => {
            this.props.history.push("/")
        })
        .catch((error) => {
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        return (
            <div>
                {
                    <h1>You are sucessfully logged out.</h1>
                }
            </div>
        )
    }
}
