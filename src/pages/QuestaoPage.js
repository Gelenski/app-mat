import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

const QuestaoPage = () => {
  const { topico } = useParams();
  const [mostraSolucao, setMostraSolucao] = useState({});

  const toggleSolucao = (index) => {
    setMostraSolucao((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const tituloFormatado = topico.replace("-", " e ");

  return (
    <Container>
      <h2 className="text-center my-4">Questões de {tituloFormatado}</h2>

      {topico === "adicao-subtracao" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Quanto é 7 + 5?</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(0)}
                className="mt-2"
              >
                {mostraSolucao[0] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[0] && (
                <Card.Text className="mt-3 text-muted">
                  A solução é 12.
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Quanto é 10 - 3?</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(1)}
                className="mt-2"
              >
                {mostraSolucao[1] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[1] && (
                <Card.Text className="mt-3 text-muted">
                  A solução é 7.
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}

      {topico === "multiplicacao-divisao" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Quanto é 4 * 3?</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(2)}
                className="mt-2"
              >
                {mostraSolucao[2] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[2] && (
                <Card.Text className="mt-3 text-muted">
                  A solução é 12.
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Quanto é 12 / 4?</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(3)}
                className="mt-2"
              >
                {mostraSolucao[3] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[3] && (
                <Card.Text className="mt-3 text-muted">A solução é 3</Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
};

export default QuestaoPage;
