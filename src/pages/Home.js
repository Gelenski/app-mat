import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const conteudos = [
  { nome: "Adição e Subtração", path: "adicao-subtracao" },
  { nome: "Multiplicação e Divisão", path: "multiplicacao-divisao" },
];

const Home = () => (
  <Container className="text-center">
    <h1 className="my-4">Seja Bem-Vindo ao nosso site</h1>
    <p className="mb-5">
      Aqui você encontrará questões matemáticas sobre os assuntos que você
      precisa!
    </p>
    <Row className="justify-content-center">
      {conteudos.map((conteudo) => (
        <Col key={conteudo.path} xs={12} md={6} lg={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>{conteudo.nome}</Card.Title>
              <Card.Text>
                Clique no botão abaixo para acessar questões sobre{" "}
                {conteudo.nome}.
              </Card.Text>
              <Link
                to={`/conteudo/${conteudo.path}`}
                className="btn btn-primary"
              >
                Acessar
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Home;
