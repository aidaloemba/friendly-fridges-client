import React from 'react';
import './Home.css'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Signup from '../modals/Signup';
import Login from '../modals/Login';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

export default function Home(props) {

    const [lgShow, setLgShow] = React.useState(false);
    const [smShow, setSmShow] = React.useState(false);
          
        return (
            <div>
                <div className="splash">
                    <h1 className="title">Friendly Fridges</h1>
                    <p className="headline">Help us reducing food waist by sharing those leftovers of yours!</p>
                    <ButtonToolbar className="auth">
                    <ButtonGroup className="mr-2">
                        <Button variant="dark" onClick={() => setLgShow(true)}>Sign up</Button>
                        <Signup
                        {...props}
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        />
                    </ButtonGroup>
                    <ButtonGroup className="mr-2">
                        <Button variant="outline-dark" onClick={() => setSmShow(true)}>Log in</Button>
                        <Login
                        {...props}
                        size="sm"
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
                                <h3 className="quote">“When we share, we open doors to a new beginning.”</h3>
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
                                        <Col xs={2} className="py-3"><Media><img className="icon align-self-center" src="./icons/refrigerator.png" alt=""/></Media></Col>
                                        <Col xs={8} className="py-3">Easily share whole foods or beverages to an entire community on our platform. *Due to hygiene concerns cooked meals are not allowed.</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} className="py-3"><img className="icon" src="./icons/laptop-computer.png" alt=""/></Col>
                                        <Col xs={8} className="py-3">Explore the different categories available. Coming in v.2: filter foods by location and display pick up locations on a map.</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} className="py-3"><img className="icon" src="./icons/bread.png" alt=""/></Col>
                                        <Col xs={8} className="py-3">Connect with any fridge owner to request additional information about a food and plan a pick up</Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col xs={12} md={8} />
                    </Row>
                    <Row className="facts my-5">
                        <Col xs={12} md={4} className="py-5">
                            <div className="fact-1">
                                <h3>Fact 1</h3>
                                <p>
                                    Over 1/3 of all food produced globally goes to waste.
                                    Ref: http://www.fao.org/home/en/
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="py-5">
                            <div className="fact-2">
                                <h3>Fact 2</h3>
                                <p>
                                    In most developed countries, over half of all food waste takes place in the home.
                                    Ref: http://www.lovefoodhatewaste.com/node/2472
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="py-5">
                            <div className="fact-3">
                                <h3>Fact 3</h3>
                                <p>
                                    2.3 billion people are joining the planet by 2050 – this will require a 60-70% increase in global food production. Or we can just stop throwing away our food!
                                    Ref: http://www.fao.org/fileadmin/templates/wsfs/docs/expert_paper/How_to_Feed_the_World_in_2050.pdf
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="py-5 text-center">
                            <div className="lcfa">
                                <h3>Last call for action</h3>
                                <p>Do you care as much as we do? Show it, meet like-minded people and make a difference!</p>
                                <ButtonGroup className="mr-2">
                                    <Button variant="dark" onClick={() => setLgShow(true)}>Join the movement!</Button>
                                    <Signup
                                    {...props}
                                    size="lg"
                                    show={lgShow}
                                    onHide={() => setLgShow(false)}
                                    />
                                </ButtonGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        )
    
}
