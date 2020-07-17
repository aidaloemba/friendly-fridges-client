import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getUser } from '../utilities/auth';
import SubmitFood from '../modals/SubmitFood';
import './Navbar.css';


export default function NavbarComponent(props)  {

    let user = getUser()
    const [modalShow, setModalShow] = React.useState(false);

    if (user) {
        return (
            <Navbar className="navbar px-5" variant="dark" expand="lg">
                <Navbar.Brand href="/latest" className="logo rotate-left">F</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">   
                    <Nav.Link href="/latest"></Nav.Link>
                    </Nav>

                    <Navbar.Text>
                    <NavDropdown title="" id="basic-nav-dropdown">
                    <>
                        <NavDropdown.Item className="blackify" onClick={() => setModalShow(true)}>
                            Submit food
                        </NavDropdown.Item>
                        <SubmitFood
                        {...props}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        </>
                        <NavDropdown.Item href="/fridge" className="blackify">My fridge</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout" className="blackify">Log out</NavDropdown.Item>
                    </NavDropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    } else {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Navbar.Text><Nav.Link href="/signup">Sign up</Nav.Link></Navbar.Text>
                    <Navbar.Text><Nav.Link href="/login">Log in</Nav.Link></Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
