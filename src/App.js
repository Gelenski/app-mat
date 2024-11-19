import {React, useState} from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Home from "./pages/Home";
import QuestaoPage from "./pages/QuestaoPage.js";
import { HouseFill } from "react-bootstrap-icons";

const conteudos = [
  { nome: "Progressão Geométrica", path: "progressao-geometrica" },
  { nome: "Logaritmo", path: "logaritmo" },
  { nome: "Soma de PA e PG", path: "Soma de PA e PG" },
  { nome: "Cosseno", path: "Cosseno" },
  { nome: "Cotangente, Cossecante, Secante", path: "Cotangente, Cossecante, Secante" },
  { nome: "Conversão de unidade", path: "Conversão de unidade" },
  { nome: "Função Exponencial", path: "Função Exponencial" },
  { nome: "Calculadora", path:"calculadora"}
];

function App() {
  const location = useLocation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      {/* Pré carrega as fontes, TENTA KKKK evitar lentidão. */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" as="style" />

      {/* navbar. */}
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} onClick={handleShow} className="fw-bold me-auto">
            <HouseFill className="me-2" /> Questões de Matemática
          </Navbar.Brand>

          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
                <HouseFill className="me-1" /> Início
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <>
      {/* Navbar lateral usando Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu Lateral</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {conteudos.map((conteudo)=> (<Nav.Link to={`/conteudo/${conteudo.path}`}>{conteudo.nome}</Nav.Link>))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>

      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/app-mat" element={<Inicio/>}/> */}
          <Route path="/conteudo/:topico" element={<QuestaoPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
