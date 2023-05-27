import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavigationBar() {
    return (
        <div style={{backgroundColor: '#59121a' }}>
            <Navbar  expand="lg" style={{paddingTop:"30px", paddingBottom:"30px"}} >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="/radiant_logo.jpg" style={{ height: '50px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" style={{color: '#fefafc'}}>Home</Nav.Link>
                            <Nav.Link href="#home" style={{color: '#fefafc'}}>About Us</Nav.Link>
                            <Nav.Link href="#link" style={{color: '#fefafc'}}>Packages</Nav.Link>
                            <Nav.Link href="#link" style={{color: '#fefafc'}}>FAQ & Contact Us</Nav.Link>
                        </Nav>
                        <Nav className="" >
                            <Nav.Link href="#home" style={{color: '#fefafc'}}>Sign In</Nav.Link>
                            <Nav.Link href="#home" className='btn btn-danger' style={{color: '#fefafc'}}>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>


            </Navbar>

        </div>
    );
}