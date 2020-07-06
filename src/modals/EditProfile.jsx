import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            postcode: "",
            email: "",
            password: "",
        }
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
                        Edit profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        {/* <Form.Group>
                            <Form.File name="photo" id="photo" label="Upload photo" />
                        </Form.Group> */}
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
                            </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Current password" type="password" onChange={this.handleChange} name="password" />
                            </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="New password" type="password" onChange={this.handleChange} name="password" />
                            <Form.Text muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                must not contain spaces, special characters, or emoji.
                            </Form.Text>
                            </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Confirm new password" type="password" onChange={this.handleChange} name="password" />
                        </Form.Group>
                        
                        <Button variant="dark" type="submit">Update</Button>
                        
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
