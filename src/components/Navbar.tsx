import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="transparent" expand="lg">
            <Container className='text-center'>
                {/* <Navbar.Brand className='text-light' href="#home">Dave Hill</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='text-light' id="basic-navbar-nav">
                <Nav className='justify-content-center' activeKey='/home'>
                    <Nav.Link className='text-light' href="#home">Home</Nav.Link>
                    <Nav.Link className='text-light' href="#link">Music</Nav.Link>
                    <Nav.Link className='text-light' href="#videos">Videos</Nav.Link>
                    <Nav.Link className='text-light' href="#merchandise">Merchandise</Nav.Link>
                    <Nav.Link className='text-light' href="#tickets">Tickets</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}

export default Navigation;