import React, { useState } from "react";
import { Button, Container, Row, Col, Form, Card, InputGroup, FormControl } from "react-bootstrap";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [firstTerm, setFirstTerm] = useState("");
  const [ratio, setRatio] = useState("");
  const [numTerms, setNumTerms] = useState("");
  const [progResult, setProgResult] = useState("");
  const [angle, setAngle] = useState("");
  const [trigResult, setTrigResult] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEvaluate = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult("Erro");
    }
  };

  const calculatePA = () => {
    const first = parseFloat(firstTerm);
    const ratioVal = parseFloat(ratio);
    const num = parseInt(numTerms);
    if (!isNaN(first) && !isNaN(ratioVal) && !isNaN(num)) {
      let terms = [];
      for (let i = 0; i < num; i++) {
        terms.push(first + i * ratioVal);
      }
      setProgResult(terms.join(", "));
    } else {
      setProgResult("Erro");
    }
  };

  const calculatePG = () => {
    const first = parseFloat(firstTerm);
    const ratioVal = parseFloat(ratio);
    const num = parseInt(numTerms);
    if (!isNaN(first) && !isNaN(ratioVal) && !isNaN(num)) {
      let terms = [];
      for (let i = 0; i < num; i++) {
        terms.push(first * Math.pow(ratioVal, i));
      }
      setProgResult(terms.join(", "));
    } else {
      setProgResult("Erro");
    }
  };

  const calculateTrig = (func) => {
    const angleInRadians = (parseFloat(angle) * Math.PI) / 180;
    if (!isNaN(angleInRadians)) {
      let result = 0;
      switch (func) {
        case "sin":
          result = Math.sin(angleInRadians);
          break;
        case "cos":
          result = Math.cos(angleInRadians);
          break;
        case "tan":
          result = Math.tan(angleInRadians);
          break;
        default:
          result = "Erro";
      }
      setTrigResult(result.toFixed(4));
    } else {
      setTrigResult("Erro");
    }
  };

  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center">Calculadora</h2>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Insira a expressão"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </InputGroup>
              <h4>Resultado: {result}</h4>
            </Col>
          </Row>

          {/* Seção de Botões de Operações Básicas */}
          <Row className="mb-4">
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("1")}>
                1
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("2")}>
                2
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("3")}>
                3
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("+")}>
                +
              </Button>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("4")}>
                4
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("5")}>
                5
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("6")}>
                6
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("-")}>
                -
              </Button>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("7")}>
                7
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("8")}>
                8
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("9")}>
                9
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("*")}>
                *
              </Button>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("0")}>
                0
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput(".")}>
                .
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="danger" onClick={handleClear}>
                C
              </Button>
            </Col>
            <Col xs={2} className="d-flex justify-content-center mb-2">
              <Button variant="secondary" onClick={() => handleInput("/")}>
                /
              </Button>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} className="d-flex justify-content-center mb-2">
              <Button variant="primary" onClick={handleEvaluate} style={{ width: "100%" }}>
                =
              </Button>
            </Col>
          </Row>

          {/* Seção de Progressões */}
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <h4>Progressões</h4>
              <Form>
                <Form.Group>
                  <Form.Label>Primeiro Termo</Form.Label>
                  <Form.Control type="number" value={firstTerm} onChange={(e) => setFirstTerm(e.target.value)} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Razão</Form.Label>
                  <Form.Control type="number" value={ratio} onChange={(e) => setRatio(e.target.value)} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Número de Termos</Form.Label>
                  <Form.Control type="number" value={numTerms} onChange={(e) => setNumTerms(e.target.value)} />
                </Form.Group>
                <Button variant="success" onClick={calculatePA}>
                  Calcular PA
                </Button>
                <Button variant="success" onClick={calculatePG}>
                  Calcular PG
                </Button>
              </Form>
              <h5>Resultado: {progResult}</h5>
            </Col>
          </Row>

          {/* Seção de Funções Trigonométricas */}
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <h4>Funções Trigonométricas</h4>
              <Form>
                <Form.Group>
                  <Form.Label>Ângulo (em graus)</Form.Label>
                  <Form.Control type="number" value={angle} onChange={(e) => setAngle(e.target.value)} />
                </Form.Group>
                <Button variant="info" onClick={() => calculateTrig("sin")}>
                  Seno
                </Button>
                <Button variant="info" onClick={() => calculateTrig("cos")}>
                  Cosseno
                </Button>
                <Button variant="info" onClick={() => calculateTrig("tan")}>
                  Tangente
                </Button>
              </Form>
              <h5>Resultado: {trigResult}</h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Calculator;
