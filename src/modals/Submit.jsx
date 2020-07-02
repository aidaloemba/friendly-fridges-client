import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form'

export default class Submit extends Component {
    constructor(props){
        super(props);



        this.handleSubmit = this.handleSubmit.bind(this);
        this.formRef = React.createRef();
    }

    state = {
        error: ""
    }

    handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(this.formRef.current);

        axios({
            url: 'http://localhost:3000/submit',
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            withCredentials: true, 
            method: "POST"
        })
        .then((response)=>{
            this.props.history.push(`/fridge}`);
        })
        .catch((err)=>{
            this.setState({
                error: err.response.data.message
            });
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} ref={this.formRef}>
                    <Form.Group>
                        <Form.File name="photo" id="photo" label="Upload photo" />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" />
                    </Form.Group>

                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select">
                        <option>Fruits & Vegetables</option>
                        <option>Cooked meal</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="description.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description"as="textarea" rows="3" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Add New</Button>
                </Form>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                        </div>
        )
    }
}