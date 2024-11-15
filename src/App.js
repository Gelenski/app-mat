import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./pages/Home";
import QuestaoPage from "./pages/QuestaoPage.js";
import { HouseFill, Book } from "react-bootstrap-icons";

// Lista dos conteúdos.
const conteudos = [
  {nome: "Progressão Geométrica", path:"progressao-geometrica"},
  {nome: "Logaritmo", path: "logaritmo"},
  {nome: "Cosseno", path: "Cosseno"},
  {nome: "Soma de PA e PG", path: "Soma de PA e PG"},
 //arrumar o codigo 
  // {nome: "Cotangente, Cossecante, Secante", path: "Cotangente, Cossecante, Secante"}
];

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Pré carrega as fontes, TENTA KKKK evitar lentidão. */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
        as="style"
      />

      {/* navbar. */}
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold me-auto">
            <HouseFill className="me-2" /> Questões de Matemática
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
                <HouseFill className="me-1" /> Home
              </Nav.Link>
              {conteudos.map((conteudo) => (
                <Nav.Link
                  key={conteudo.path}
                  as={Link}
                  to={`/conteudo/${conteudo.path}`}
                  active={location.pathname === `/conteudo/${conteudo.path}`}
                >
                  <Book className="me-1" /> {conteudo.nome}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conteudo/:topico" element={<QuestaoPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
