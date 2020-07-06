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
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita labore dolorem hic, harum veritatis dolor ab cumque adipisci deleniti...</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        {/* FEATURE */}
                        <Col xs={6} md={4}>
                            <div className="feature">
                                <h3>How does it work?</h3>
                                <table>
                                    <row>
                                        <td><img className="icon" src="./icons/refrigerator.png" alt=""/></td>
                                        <td>Upload food blabla</td>
                                    </row>
                                    <row>
                                        <td><img className="icon" src="./icons/laptop-computer.png" alt=""/></td>
                                        <td>Browse and filters blabla</td>
                                    </row>
                                    <row>
                                        <td><img className="icon" src="./icons/bread.png" alt=""/></td>
                                        <td>Pick up for free blabla</td>
                                    </row>
                                </table>
                            </div>
                        </Col>
                        <Col xs={12} md={8} />
                    </Row>
                    <Row className="facts my-5">
                        <Col xs={12} md={4} className="py-5">
                            <div className="fact-1">
                                <h3>Fact 1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis minus numquam sunt veritatis illum aliquid, laborum voluptates cupiditate, exercitationem voluptate totam laboriosam deleniti recusandae voluptatibus blanditiis ad est consectetur!</p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="py-5">
                            <div className="fact-2">
                                <h3>Fact 2</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis minus numquam sunt veritatis illum aliquid, laborum voluptates cupiditate, exercitationem voluptate totam laboriosam deleniti recusandae voluptatibus blanditiis ad est consectetur!</p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="py-5">
                            <div className="fact-3">
                                <h3>Fact 3</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis minus numquam sunt veritatis illum aliquid, laborum voluptates cupiditate, exercitationem voluptate totam laboriosam deleniti recusandae voluptatibus blanditiis ad est consectetur!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="my-5 text-center">
                            <div className="lcfa">
                                <h3>Last call for action</h3>
                                <p>catch phrase</p>
                                <ButtonGroup className="mr-2">
                                    <Button variant="dark" onClick={() => setLgShow(true)}>Join the movement!</Button>
                                    <Signup
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
