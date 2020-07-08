import React from 'react';
import './Home.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Signup from '../modals/Signup';
import Login from '../modals/Login';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Footer from '../components/Footer';

export default function Home(props) {

    const [lgShow, setLgShow] = React.useState(false);
    const [smShow, setSmShow] = React.useState(false);
          
        return (
            <div>
                <div className="splash">
                    <h1 className="title">Friendly<br  />Fridges</h1>
                    <ButtonToolbar className="my-5 auth">
                    <ButtonGroup className="mr-2">
                        <Button variant="light" size="lg" onClick={() => setLgShow(true)}>Sign up</Button>
                        <Signup
                        {...props}
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        />
                    </ButtonGroup>
                    <ButtonGroup className="mr-2">
                        <Button variant="outline-dark link" size="lg" onClick={() => setSmShow(true)}>Log in</Button>
                        <Login
                        {...props}
                        show={smShow}
                        onHide={() => setSmShow(false)}
                    />
                    </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <Container className="wrapper">
                    <Row>
                        <Col xs={12} md={8} />
                        {/* BENEFIT */}
                        <Col xs={6} md={4} className="mb-5">
                            <div className="benefit">
                                <h3 className="quote scale-up-bottom">“When we share, we open doors to a new beginning.”</h3>
                                <h5>― Paul Bradley Smith</h5>
                                <br />
                                <p>Whether you are overwhelmed by your wedding party leftovers or planning a long holiday abroad, there is an alternative to throwing the food you are leaving behind: sharing, for free!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        {/* FEATURE */}
                        <Col xs={6} md={4}>
                            <div className="feature">
                                <h3>How does it work?</h3>
                                <Container>
                                    <Row>
                                        <Col xs={2} className="py-3 vertical-center"><Media><img className="icon align-self-center" src="./icons/refrigerator.png" alt=""/></Media></Col>
                                        <Col xs={8} className="py-3">Easily share whole foods* or beverages to an entire community on our platform.
                                        <Form.Text muted>*Due to hygiene concerns cooked meals are not allowed.</Form.Text></Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} className="py-3 vertical-center"><img className="icon" src="./icons/laptop-computer.png" alt=""/></Col>
                                        <Col xs={8} className="py-3 vertical-center">Explore the different categories available.</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} className="py-3 vertical-center"><img className="icon" src="./icons/bread.png" alt=""/></Col>
                                        <Col xs={8} className="py-3"><b>Coming soon:</b> Connect with any fridge owner to request additional information or plan a pick up</Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col xs={12} md={8} />
                    </Row>
            
                    
                    <Row className="facts my-5">
                    <Col xs={12}>
                        <Row>
                            <Col xs={12} className="text-center">
                            <h3>Did you know?</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4} className="p-5 vertical-center">
                                <img src="./images/fact-1.jpeg" alt="" className="fact-img"/>
                                <p>
                                    Over 1/3 of all food produced globally goes to waste.
                                    <Form.Text><a href="http://www.fao.org/home/en/" className="text-muted">Source</a></Form.Text>               
                                </p>
                            </Col>
                            <Col xs={12} md={4} className="p-5 vertical-center">
                                <img src="./images/fact-2.jpeg" alt="" className="fact-img"/>
                                <p>
                                2.3 billion people are joining the planet by 2050 – this will require a 60-70% increase in global food production. Or we can just stop throwing away our food!
                                    <Form.Text><a  href="http://www.lovefoodhatewaste.com/node/2472" className="text-muted">Source</a></Form.Text>
                                </p>
                            </Col>
                            <Col xs={12} md={4} className="p-5 vertical-center">
                                <img src="./images/fact-3.jpg" alt="" className="fact-img"/>
                                <p>
                                    In most developed countries, over half of all food waste takes place in the home.
                                    <Form.Text><a href="http://www.fao.org/fileadmin/templates/wsfs/docs/expert_paper/How_to_Feed_the_World_in_2050.pdf" className="text-muted">Source</a></Form.Text>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    </Row>

                    <Row>
                        <Col xs={12} className="lcfa text-center">
                                <p>Do you care as much as we do? Show it, meet like-minded people and make a difference!</p>
                                <ButtonGroup>
                                    <Button variant="dark" onClick={() => setLgShow(true)}>Join the movement!</Button>
                                    <Signup
                                    {...props}
                                    show={lgShow}
                                    onHide={() => setLgShow(false)}
                                    />
                                </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
            
        )
    
}
