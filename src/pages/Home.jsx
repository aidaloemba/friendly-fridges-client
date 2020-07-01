import React, { Component } from 'react';
import Landing from '../layouts/Landing';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import NavbarSplash from '../components/NavbarSplash';
// import ExampleModal from './user/ExampleModal';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Landing>
                    <NavbarSplash />
                    <div className="splash">
                        <div className="wrapper">
                            <h1 className="title">Friendly Fridges</h1>
                            <p>Sharing is caring.</p>
                            <p>Help us reducing food waist by sharing those leftovers of yours!</p>
                            <ButtonToolbar>
                            <ButtonGroup className="mr-2">
                                <Button variant="dark" href="/signup">Sign up</Button>
                            </ButtonGroup>
                            <ButtonGroup className="mr-2">
                                <Button variant="outline-dark" href="/login">Log in</Button>
                            </ButtonGroup>
                            </ButtonToolbar>
                            <a className="ct-btn-scroll ct-js-btn-scroll" href="#section2"><img alt="Arrow Down Icon" src="../icons/3873060771543238855-64.png" /></a>
                        </div>
                    </div>
                    <div className="container">
                        <div className="benefit">
                            <h2>IMG</h2>
                            <h3>Reduce food waist</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita labore dolorem hic, harum veritatis dolor ab cumque adipisci deleniti doloremque nemo placeat illo nostrum repudiandae, voluptas omnis consequuntur facilis eveniet!</p>
                        </div>
                        <div className="benefit">
                            <h2>IMG</h2>
                            <h3>Save money and meet like-minded people</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita labore dolorem hic, harum veritatis dolor ab cumque adipisci deleniti doloremque nemo placeat illo nostrum repudiandae, voluptas omnis consequuntur facilis eveniet!</p>
                        </div>

                    </div>
                    <div className="features">
                        <p>Features</p>
                    </div>
                </Landing>
            </div>
        )
    }
}
