import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

const questoes = {
  "adicao-subtracao": [
    { pergunta: "Quanto é 7 + 5?", solucao: "A solução é 12." },
    { pergunta: "Quanto é 10 - 3?", solucao: "A solução é 7." },
  ],
  "multiplicacao-divisao": [
    { pergunta: "Quanto é 4 * 3?", solucao: "A solução é 12." },
    { pergunta: "Quanto é 12 / 4?", solucao: "A solução é 3." },
  ],
};

const QuestaoPage = () => {
  const { topico } = useParams();
  const [mostraSolucao, setMostraSolucao] = useState({});

  const toggleSolucao = (index) => {
    //solução.
    setMostraSolucao((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  //formata titulo.
  const tituloFormatado = topico.replace("-", " e ");

  return (
    <Container>
      <h2 className="text-center my-4">Questões de {tituloFormatado}</h2>
      {questoes[topico]?.map((questao, index) => (
        <Card key={index} className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>{questao.pergunta}</Card.Title>
            <Button
              variant="info"
              onClick={() => toggleSolucao(index)}
              className="mt-2"
            >
              {mostraSolucao[index] ? "Ocultar Solução" : "Mostrar Solução"}
            </Button>
            {mostraSolucao[index] && (
              <Card.Text className="mt-3 text-muted">
                {questao.solucao}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default QuestaoPage;
