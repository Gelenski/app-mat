import { React, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Home from "./pages/Home";
import QuestaoPage from "./pages/QuestaoPage.js";
import { HouseFill } from "react-bootstrap-icons";

const conteudos = [
  { nome: "Progressão Geométrica", path: "progressao-geometrica" },
  { nome: "Logaritmo", path: "logaritmo" },
  { nome: "Soma de PA e PG", path: "soma-de-pa-e-pg" },
  { nome: "Cosseno", path: "cosseno" },
  { nome: "Cotangente, Cossecante, Secante", path: "cotangente-cossecante-secante" },
  { nome: "Conversão de unidade", path: "conversao-de-unidade" },
  { nome: "Função Exponencial", path: "funcao-exponencial" },
  { nome: "Calculadora", path: "calculadora" },
];

// Estilos como objetos JavaScript
const styles = {
  offcanvas: {
    width: "250px",
    backgroundColor: "#f8f9fa",
  },
  link: {
    color: "#333",
    padding: "10px 15px",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  linkHover: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  activeLink: {
    backgroundColor: "#0056b3",
    color: "#fff",
  },
};

function App() {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Pré-carregando fontes */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" as="style" />

      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand onClick={handleShow} className="fw-bold me-auto">
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
      <Offcanvas show={show} onHide={handleClose} placement="start" style={styles.offcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Seções</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {conteudos.map((conteudo) => (
              <Link
                key={conteudo.path}
                to={`/conteudo/${conteudo.path}`}
                style={{
                  ...styles.link,
                  ...(location.pathname === `/conteudo/${conteudo.path}` ? styles.activeLink : {}),
                }}
                onClick={handleClose} // Fecha o menu ao clicar
              >
                {conteudo.nome}
              </Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Conteúdo  */}
      <Container className="mt-5">
        <Routes>
          <Route path="/app-mat" element={<Home />} />
          <Route path="/conteudo/:topico" element={<QuestaoPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
