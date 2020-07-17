import React, { Component } from 'react';
import DefaultLayout from '../layouts/Default';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import EditProfile from '../modals/EditProfile';

export default class Fridge extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            foods: [],
            error: null
        }
        this.deleteFood = this.deleteFood.bind(this);
// const [modalShow, setModalShow] = React.useState(false);
    }



    componentDidMount() {
        axios({
            url: `${process.env.REACT_APP_API_BASE}/fridge`,
            withCredentials: true,
            method: "GET"
        })
        .then(response => {
            this.setState({
                foods: response.data
            })
        })
    }


    deleteFood(_id){
        
        const updatedFoods = [...this.state.foods, _id]
        axios({
            url: `${process.env.REACT_APP_API_BASE}/fridge/delete/${_id}`,
            withCredentials: true,
            method: "GET"
        })
        
            .then((response)=> {
                this.setState({
                    foods: updatedFoods
                })
                this.props.history.push('/fridge');
            })
            .catch((err) => {
                this.setState({
                    error: err.response.data.message
                });
            });
	}
			

    render() {
        // if(this.state.foods.length === 0 )
        // return <h1>You fridge is empty!</h1>;
        return (
            <div>
                <DefaultLayout>
                <Container>
                    <Row className="header my-5">
                        <Col>
                        <h2>My fridge</h2>
                        </Col>
                        <Col />
                        <Col className="text-right">
                        {/* <h6>User details</h6> */}
                        </Col>
                        <Col className="text-center">
                        {/* <p>User profile picture</p> */}
                        {/* <>
                        <Button onClick={() => setModalShow(true)}>Edit profile</Button>
                        <EditProfile
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        </> */}
                        </Col>
                    </Row>
                    <Row>
                        <CardColumns>
                        {
                    this.state.foods.map((food, index) => {
                        return (
                            <div key={`key-${food._id}`}>
                            <Card>
                                <Card.Img variant="top" src={food.photo} alt="Food photo"/>
                                <Card.Body>
                                <Card.Title>{food.name}</Card.Title>
                                <Card.Text>
                                    <h5>{food.category}</h5>
                                    <p>{food.description}</p>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Submitted on {food.createdAt}</small>
                                <br />
                                <Button variant="outline-dark" onClick={()=> this.deleteFood(food._id)}>Delete</Button>
                                </Card.Footer>
                            </Card>
                            </div>
                        )
                    })
                }
                        </CardColumns>

                    </Row>
                </Container>
                {/* {
                    this.state.foodBox.map((food, index) => 
                    <FoodThumbnail
                        index={`${index}-${food.name}`}
                        photo={food.photo}
                        name={food.name}
                        category={food.category}
                    />
                    )
                } */}
                </DefaultLayout>
            </div>
        )
    }
    
}
