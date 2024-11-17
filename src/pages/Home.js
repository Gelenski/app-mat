import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const conteudos = [
  { nome: "Progressão Geométrica", path: "progressao-geometrica" },
  { nome: "Logaritmo", path: "logaritmo" },
  { nome: "Soma de PA e PG", path: "Soma de PA e PG" },
  { nome: "Cosseno", path: "Cosseno" },
  { nome: "Cotangente, Cossecante, Secante", path: "Cotangente, Cossecante, Secante" },
  { nome: "Conversão de unidade", path: "Conversão de unidade" },
];

const Home = () => (
  <Container className="text-center">
    <h1 className="my-4">Seja Bem-Vindo ao nosso site</h1>
    <p className="mb-5">Aqui você encontrará questões matemáticas sobre os assuntos que você precisa!</p>
    <Row className="justify-content-center">
      {conteudos.map((conteudo) => (
        <Col key={conteudo.path} xs={12} md={6} lg={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>{conteudo.nome}</Card.Title>
              <Card.Text>Clique no botão abaixo para acessar questões sobre {conteudo.nome}.</Card.Text>
              <Link to={`/conteudo/${conteudo.path}`} className="btn btn-primary">
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
