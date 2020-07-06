import React, { Component } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import qs from "qs";


export default class SubmitFood extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = { 
            name: '',
            category: '',
            description: '',
            owner: '',
            location: '',
            error: ''
          }
          
    }

    handleSubmit(e){
        e.preventDefault();
        // let formData = new FormData(this.formRef.current);

        const setFood = (food)=> {
            window.localStorage.setItem("food", JSON.stringify(food));
        }
        
             axios({
                url: 'http://localhost:3000/submit',
                data: qs.stringify(this.state.food),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded' 
                },
                withCredentials: true, 
                method: "POST"
            })
            .then((response)=>{
                this.setState = {
                    owner: "owner",
                    location: "location"
                }
                setFood(response.data)
                this.props.history.push("/fridge");
            })
            .catch((err)=>{
                this.setState({
                    error: err.response.data
                });
            });
    }

    handleChange(e) {
        let food = {...this.state.food};
        food[e.target.name] = e.target.value;
        this.setState({
            food
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
                        Submit food
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        {/* <Form.Group>
                            <Form.File name="photo" id="photo" label="Upload photo" />
                        </Form.Group> */}
                        <Form.Group controlId="name">
                            <Form.Control placeholder="Name" name="name" type="text" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="category">
                            <Form.Control placeholder="Category" name="category" as="select" onChange={this.handleChange}>
                                <option defaultValue>Category</option>
                                <option value="1">Fruits & Vegetables</option>
                                <option value="2">Cooked meal</option>
                                <option value="3">Option 3</option>
                                <option value="4">Option 4</option>
                                <option value="5">Option 5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="description.ControlTextarea1">
                            <Form.Control placeholder="Description" name="description" as="textarea" rows="3" onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group controlId="owner">
                            <input name="owner" type="hidden" value="owner" />
                        </Form.Group>

                        <Form.Group controlId="location">
                            <Form.Control name="location" type="hidden" value="location" />
                        </Form.Group>
                        
                        <Button variant="dark" type="submit">Submit</Button>
                        
                    </Form>
                </Modal.Body>
            </Modal>
                        
        )
    }
}