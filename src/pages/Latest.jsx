import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import DefaultLayout from '../layouts/Default';
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
        axios.get(`${process.env.REACT_APP_API_BASE}/latest`)
        .then(response => {
            this.setState({
                foods: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <DefaultLayout>
                <Container>
                    <Row className="header my-5">
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
                                    {food.category}
                                    {food.description}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Submitted on {food.createdAt}</small>
                                </Card.Footer>
                            </Card>
                            </div>
                        )
                    })
                }
                        </CardColumns>

                    </Row>
                </Container>
            </DefaultLayout>
            </div>
        )
    }
}
