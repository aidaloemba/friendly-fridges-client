import React, { Component } from 'react';
import './Home.css'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import NavbarSplash from '../components/NavbarSplash';
// import ExampleModal from './user/ExampleModal';

export default class Home extends Component {
    render() {
        return (
            <div>
                    {/* <NavbarSplash /> */}
                    
                    <div className="splash">
                            <h1 className="title">Friendly Fridges</h1>
                            <p>Help us reducing food waist by sharing those leftovers of yours!</p>
                            <ButtonToolbar>
                            <ButtonGroup className="mr-2">
                                <Button variant="dark" href="/signup">Sign up</Button>
                            </ButtonGroup>
                            <ButtonGroup className="mr-2">
                                <Button variant="outline-dark" href="/login">Log in</Button>
                            </ButtonGroup>
                            </ButtonToolbar>
                    </div>
                        <div className="benefit">
                                <h3>“When we share, we open doors to a new beginning.”</h3>
                                <h4>― Paul Bradley Smith</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita labore dolorem hic, harum veritatis dolor ab cumque adipisci deleniti doloremque nemo placeat illo nostrum repudiandae, voluptas omnis consequuntur facilis eveniet!</p>
                            </div>

                    
                    <div className="features">
                        <h4>How does it work?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis minus numquam sunt veritatis illum aliquid, laborum voluptates cupiditate, exercitationem voluptate totam laboriosam deleniti recusandae voluptatibus blanditiis ad est consectetur!</p>
                    </div>
                    </div>
            
        )
    }
}
