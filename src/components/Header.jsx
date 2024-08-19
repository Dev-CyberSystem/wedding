import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./StyleHero.css"

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-center">
      <Navbar.Brand href="#" className="brand"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
