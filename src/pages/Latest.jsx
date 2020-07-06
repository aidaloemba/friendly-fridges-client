import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';

export default class Latest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foods: [],
            error: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/latest')
        .then(response => {
            this.setState({
                foods: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row className="my-5">
                        <Col>
                        <h2>Latest submissions</h2>
                        </Col>
                    </Row>
                    <Row>
                        <CardColumns>
                        {
                    this.state.foods.map((food, index) => {
                        return (
                            <div key={`${food._id}-${food.owner}`}>
                            <Card>
                                <Card.Img variant="top" src={food.photo} alt="Food name photo"/>
                                <Card.Body>
                                <Card.Title>{food.name}</Card.Title>
                                <Card.Text>
                                    <h5>{food.category}</h5>
                                    <p>{food.description}</p>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Submitted 3 days ago in Amsterdam by {food.owner}</small>
                                </Card.Footer>
                            </Card>
                            </div>
                        )
                    })
                }
                        </CardColumns>

                    </Row>
                </Container>
            </div>
        )
    }
}
