import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

function NavbarComponent() {
  const location = useLocation();
  const conteudos = [
    {nome: "Progressão Geométrica", path:"progressao-geometrica"},
    {nome: "Logaritmo", path: "logaritmo"},
    {nome: "Cosseno", path: "cosseno"}
  ];

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Questões de Matemática
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content">
          <List />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-content">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            {conteudos.map((conteudo) => (
              <Nav.Link
                key={conteudo.path}
                as={Link}
                to={`/conteudo/${conteudo.path}`}
                className={
                  location.pathname === `/conteudo/${conteudo.path}`
                    ? "active"
                    : ""
                }
              >
                {conteudo.nome}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
