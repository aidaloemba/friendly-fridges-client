import React, { Component } from 'react';
import {signup} from '../utilities/auth';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Sign up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="First name" type="text" name="firstname" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Last name" type="text" onChange={this.handleChange} name="lastname" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Post code" type="text" onChange={this.handleChange} name="postcode" />
                            </Form.Group>
                            <Form.Group as={Col} />
                        </Form.Row>
                        <Form.Group>
                            <Form.Control placeholder="Email" type="email" onChange={this.handleChange} name="email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Password" type="password" onChange={this.handleChange} name="password" />
                            <Form.Text muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </Form.Group>
                        <Button onClick={this.signupUser} variant="primary">Sign up</Button>
                    
                        {
                            this.state.error && 
                            <p>{this.state.error.message || "error"}</p>
                        } 
                    </Form>
                    <a href="/login"> Already a member? Log in!</a>
                </Modal.Body>
            </Modal>
        )
    }
}