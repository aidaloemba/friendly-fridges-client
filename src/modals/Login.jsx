import React, { Component } from 'react';
import {login} from '../utilities/auth';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';

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
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Log in
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control name="email" onChange={this.handleChange} type="email" placeholder="Email address" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="password" onChange={this.handleChange} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={this.loginUser} variant="primary">Log in</Button>
                        {
                            this.state.error && 
                            <p>{this.state.error.message || "error"}</p>
                        }
                    </Form>
                    <a href="/signup"> Not a member? Sign up!</a>
                </Modal.Body>
            </Modal>
        )
    }
}
