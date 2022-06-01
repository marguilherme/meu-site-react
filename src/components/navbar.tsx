import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


export const NavbarComponent = () => {
    return(
    <>
    <Navbar bg="light" expand="lg" sticky="top">
        <Container>
        <Navbar.Brand href="/">HomeImg</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  </>
);
}