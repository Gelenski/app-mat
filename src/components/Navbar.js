import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Questões de Matemática
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content">
          <List />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-content">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
