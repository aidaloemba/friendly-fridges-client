import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavbarRegular extends Component {
    render() {
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
                    <Navbar.Text><Nav.Link href="/signup">Sign up</Nav.Link></Navbar.Text>
                    <Navbar.Text><Nav.Link href="/login">Log in</Nav.Link></Navbar.Text>
                    <Navbar.Text>
                    <NavDropdown title="User photo thumb" id="basic-nav-dropdown">
                        <NavDropdown.Item 
                        href="#action/3.1">Add new</NavDropdown.Item>
                        <NavDropdown.Item href="#">Your fridge</NavDropdown.Item>
                        <NavDropdown.Item href="#">Account settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
                    </NavDropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
