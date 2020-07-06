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
            location: ''
          }
    }

    handleSubmit(e){
        e.preventDefault();
        // let formData = new FormData(this.formRef.current);
        // debugger here
        const setFood = (food)=> {
            window.localStorage.setItem("food", JSON.stringify(food));
        }
        
             axios({
                url: 'http://localhost:3000/food/submit',
                data: qs.stringify(this.state.food),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded' 
                },
                withCredentials: true, 
                method: "POST"
            })
            .then((response)=>{
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
                                <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                                <option value="Meat">Meat</option>
                                <option value="Poultry & Eggs">Poultry & Eggs</option>
                                <option value="Fish & Seafood">Fish & Seafood</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Beverage">Beverage</option>
                                <option value="Cooked Meal">Cooked Meal</option>
                                <option value="5">Option 5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="description.ControlTextarea1">
                            <Form.Control placeholder="Description" name="description" as="textarea" rows="3" onChange={this.handleChange} />
                        </Form.Group>

                        <Button variant="dark" type="submit">Submit</Button>
                        
                    </Form>
                </Modal.Body>
            </Modal>
                        
        )
    }
}