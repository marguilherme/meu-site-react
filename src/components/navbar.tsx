import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './header.css';

export const NavbarComponent = () => {
    return(
    <>
    <Navbar className="color-nav" expand="lg" sticky="top">
        <Container>
            <Link to="/" ><div className="icone"/></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="dd-flex flex-row-reverse" id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">Sobre</Link>
                    <Link className="nav-link" to="/contact">Contato</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  </>
);
}