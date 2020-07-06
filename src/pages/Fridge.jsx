import React from 'react';
import Navbar from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditProfile from '../modals/EditProfile';
// import FoodThumbnail from '../components/FoodThumbnail';

export default function Fridge() {
    // constructor(props) {
    //     super(props)
    // }
    const [modalShow, setModalShow] = React.useState(false);

        return (
            <div>
                <Navbar />
                <Container>
                    <Row className="my-5">
                        <Col>
                        <h1>Hey username!</h1>
                        </Col>
                        <Col />
                        <Col className="text-right">
                        <h6>User details</h6>
                        </Col>
                        <Col className="text-center">
                        <p>User profile picture</p>
                        <>
                        <Button onClick={() => setModalShow(true)}>Edit profile</Button>
                        <EditProfile
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        </>
                        </Col>
                    </Row>
                    <Row>
                        <CardColumns>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                                </blockquote>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card bg="primary" text="white" className="text-center p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                                </blockquote>
                            </Card>
                            <Card className="text-center">
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src="holder.js/100px160" />
                            </Card>
                            <Card className="text-right">
                                <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                                </blockquote>
                            </Card>
                            <Card>
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                                </Card.Body>
                            </Card>
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
            </div>
        )
    
}
