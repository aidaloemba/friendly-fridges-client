import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getUser } from '../utilities/auth';
import Submit from '../modals/Submit';


export default function NavbarRegular()  {

    let user = getUser()
    const [modalShow, setModalShow] = React.useState(false);

    if (user) {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#">Latest</Nav.Link>
                    <Nav.Link href="#">In your neighbourhood</Nav.Link>
                    </Nav>

                    <Navbar.Text>
                    <NavDropdown title="User photo thumb" id="basic-nav-dropdown">
                        <NavDropdown.Item 
                        href="/submit">Submit food</NavDropdown.Item>

                    <>
                        <NavDropdown.Item href="#" onClick={() => setModalShow(true)}>
                            Submit food modal
                        </NavDropdown.Item>

                        <Submit
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        </>

                        <NavDropdown.Item href="/fridge">My fridge</NavDropdown.Item>
                        <NavDropdown.Item href="#">Account settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
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
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    
                    <Navbar.Text><Nav.Link href="/signup">Sign up</Nav.Link></Navbar.Text>
                    <Navbar.Text><Nav.Link href="/login">Log in</Nav.Link></Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
