import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import Calculator from "../components/Calculadora";

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

const QuestaoPage = () => {
  const { topico } = useParams();
  const [mostraSolucao, setMostraSolucao] = useState({});

  const conteudoAtual = conteudos.find((conteudo) => conteudo.path === topico);
  const titulo = conteudoAtual ? conteudoAtual.nome : "Tópico não encontrado";

  const toggleSolucao = (index) => {
    setMostraSolucao((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Container>
      <h2 className="text-center my-4">Questões de {titulo}</h2>
      {/* -------------- progressao aritmetica------------- */}
      {topico === "progressao-geometrica" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                Uma progressão geométrica possui o primeiro termo igual a 5 e a razão 7. O sétimo termo dessa pg é:
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(0)} className="mt-2">
                {mostraSolucao[0] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[0] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1.q(n-1){<br />}
                  an=5.7(7-1){<br />}
                  an=5.7(6){<br />}
                  an=5.177.649{<br />}
                  an=588.245{<br />}
                  Resultado: O sétimo termo dessa pg é 588.245
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                A seguinte sequência é uma progressão geométrica, observe: (2,6,18,54…) Determine o 8º termo dessa
                progressão.
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(1)} className="mt-2">
                {mostraSolucao[1] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[1] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1*q(n-1){<br />}
                  a8=2*3(8-1){<br />}
                  a8=2*3(7){<br />}
                  a8=2*2187{<br />}
                  a8=4374{<br />}
                  Resultado: O 8º termo dessa progressão é 4374
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                Qual o valor do 6º termo de uma progressão geométrica em que o primeiro termo é 6 e a razão é 2?
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(2)} className="mt-2">
                {mostraSolucao[2] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[2] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1*q(n-1){<br />}
                  a6=3*2(6-1){<br />}
                  a6=3*2(5){<br />}
                  a6=3*32{<br />}
                  a6=160{<br />}
                  Resultado: O valor do 6º termo dessa progressão é 160.
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                Em uma progressão geométrica, o primeiro termo é 4 e a razão é 2. Qual o valor do 3º termo?
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(3)} className="mt-2">
                {mostraSolucao[3] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[3] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1*q(n-1){<br />}
                  a3=4*2(3-1){<br />}
                  a3=4*2(2){<br />}
                  a3=4*4{<br />}
                  a3=16{<br />}
                  Resultado: O 3º termo é 16.
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                Em uma progressão geométrica, o primeiro termo é 10 e o segundo termo é 15. Qual a razão da PG e o valor
                do terceiro termo?
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(4)} className="mt-2">
                {mostraSolucao[4] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[4] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1*q(n-1){<br />}
                  a3= a1*q(3-1){<br />}
                  a3=10.1,5(2){<br />}
                  a3=10*2,25{<br />}
                  a3=22,5{<br />}
                  Resultado: A razão é igual a 1,5 e o valor do 3º termo é 22,5.
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}
      {/* ---------------- LOGARITMOS -------------------- */}
      {topico === "logaritmo" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na equação: log2(x) = 5</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(5)} className="mt-2">
                {mostraSolucao[5] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[5] && (
                <Card.Text className="mt-3 text-muted">
                  log2(x) = 5 <br></br>x = 2⁵<br></br>x = 32
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Simplifique a expressão log3(27)</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(6)} className="mt-2">
                {mostraSolucao[6] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[6] && (
                <Card.Text className="mt-3 text-muted">
                  log3(27) = log3(3³){<br />}
                  log3(3³) = 3.log3(3) = 3 * 1 = 3{<br />}
                  log3(27) = 3{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação: log10(x + 4) = 2</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(7)} className="mt-2">
                {mostraSolucao[7] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[7] && (
                <Card.Text className="mt-3 text-muted">
                  log10(a) = c{<br />}a = 10^c{<br />}
                  log10(x+4) = 2{<br />}x + 4 = 10²{<br />}x + 4 = 100{<br />}x + 4 = 100{<br />}x = 100 - 4{<br />}x =
                  96{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Dada a expressão log5(125), encontre seu valor.</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(8)} className="mt-2">
                {mostraSolucao[8] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[8] && (
                <Card.Text className="mt-3 text-muted">
                  log5(125) = log5(5³){<br />}
                  log5(5³) = 3 * log5(5) = 3 * 1 = 3{<br />}
                  log5(125) = 3{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação: log4(x) + log4(8) = log4(x * 8) </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(9)} className="mt-2">
                {mostraSolucao[9] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[9] && (
                <Card.Text className="mt-3 text-muted">
                  log4(x * 8) = 5{<br />}x * 8 = 4⁵{<br />}
                  4⁵ = 1024{<br />}x * 8 = 1024{<br />}x = 1024/8{<br />}
                  Resultado: X = 128
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}
      {/* ---------------- Cosseno -------------------- */}
      {topico === "cosseno" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                Dois lados de um terreno de forma triangular medem 15 m e 10 m, formando um ângulo de 60°. O comprimento
                do muro necessário para cercar o terreno, em metros, é:<br></br>
                a) 5(5 + √15)<br></br>
                b) 5(5 + √5)<br></br>
                c) 5(5 + √13)<br></br>
                d) 5(5 + √11)<br></br>
                e) 5(5 + √7)<br></br>
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(10)} className="mt-2">
                {mostraSolucao[10] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[10] && (
                <Card.Text className="mt-3 text-muted">
                  x2 = 102 + 152 – 2·10·15·cos60°<br></br>
                  x2 = 100 + 225 – 2·150·cos60°<br></br>
                  x2 = 325 – 300·1/2<br></br>
                  x2 = 325 – 150<br></br>
                  x2 = 175<br></br>x = √175<br></br>x = √[5·35]<br></br>x = √[5·5·7]<br></br>x = √[52·7]<br></br>x = 5√7
                  <br></br>
                  Logo, a soma que representa o perímetro desse triângulo é:<br></br>
                  10 + 15 + x<br></br>
                  25 + 5√7<br></br>
                  5·5 + 5√7<br></br>
                  5(5 + √7)<br></br>
                  Letra E.<br></br>
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Simplifique a expressão log3(27)</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(11)} className="mt-2">
                {mostraSolucao[11] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[11] && (
                <Card.Text className="mt-3 text-muted">
                  log3(27) = log3(3³){<br />}
                  log3(3³) = 3.log3(3) = 3 * 1 = 3{<br />}
                  log3(27) = 3{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação: log10(x + 4) = 2</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(12)} className="mt-2">
                {mostraSolucao[12] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[12] && (
                <Card.Text className="mt-3 text-muted">
                  log10(a) = c{<br />}a = 10^c{<br />}
                  log10(x+4) = 2{<br />}x + 4 = 10²{<br />}x + 4 = 100{<br />}x + 4 = 100{<br />}x = 100 - 4{<br />}x =
                  96{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Dada a expressão log5(125), encontre seu valor.</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(13)} className="mt-2">
                {mostraSolucao[13] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[13] && (
                <Card.Text className="mt-3 text-muted">
                  log5(125) = log5(5³){<br />}
                  log5(5³) = 3 * log5(5) = 3 * 1 = 3{<br />}
                  log5(125) = 3{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação: log4(x) + log4(8) = log4(x * 8) </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(14)} className="mt-2">
                {mostraSolucao[14] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[14] && (
                <Card.Text className="mt-3 text-muted">
                  log4(x * 8) = 5{<br />}x * 8 = 4⁵{<br />}
                  4⁵ = 1024{<br />}x * 8 = 1024{<br />}x = 1024/8{<br />}
                  Resultado: X = 128
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}
      {/* ---------------- Cosseno -------------------- */}
      {topico === "Cosseno" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                Dois lados de um terreno de forma triangular medem 15 m e 10 m, formando um ângulo de 60°. O comprimento
                do muro necessário para cercar o terreno, em metros, é:<br></br>
                a) 5(5 + √15)<br></br>
                b) 5(5 + √5)<br></br>
                c) 5(5 + √13)<br></br>
                d) 5(5 + √11)<br></br>
                e) 5(5 + √7)<br></br>
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(10)} className="mt-2">
                {mostraSolucao[10] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[10] && (
                <Card.Text className="mt-3 text-muted">
                  x2 = 102 + 152 – 2·10·15·cos60°<br></br>
                  x2 = 100 + 225 – 2·150·cos60°<br></br>
                  x2 = 325 – 300·1/2<br></br>
                  x2 = 325 – 150<br></br>
                  x2 = 175<br></br>x = √175<br></br>x = √[5·35]<br></br>x = √[5·5·7]<br></br>x = √[52·7]<br></br>x = 5√7
                  <br></br>
                  Logo, a soma que representa o perímetro desse triângulo é:<br></br>
                  10 + 15 + x<br></br>
                  25 + 5√7<br></br>
                  5·5 + 5√7<br></br>
                  5(5 + √7)<br></br>
                  Letra E.<br></br>
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Simplifique a expressão log3(27)</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(11)} className="mt-2">
                {mostraSolucao[11] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[11] && (
                <Card.Text className="mt-3 text-muted">
                  log3(27) = log3(3³){<br />}
                  log3(3³) = 3.log3(3) = 3 * 1 = 3{<br />}
                  log3(27) = 3{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação: log10(x + 4) = 2</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(12)} className="mt-2">
                {mostraSolucao[12] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[12] && (
                <Card.Text className="mt-3 text-muted">
                  log10(a) = c{<br />}a = 10^c{<br />}
                  log10(x+4) = 2{<br />}x + 4 = 10²{<br />}x + 4 = 100{<br />}x + 4 = 100{<br />}x = 100 - 4{<br />}x =
                  96{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Dada a expressão log5(125), encontre seu valor.</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(13)} className="mt-2">
                {mostraSolucao[13] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[13] && (
                <Card.Text className="mt-3 text-muted">
                  log5(125) = log5(5³){<br />}
                  log5(5³) = 3 * log5(5) = 3 * 1 = 3{<br />}
                  log5(125) = 3{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação: log4(x) + log4(8) = log4(x * 8) </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(14)} className="mt-2">
                {mostraSolucao[14] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[14] && (
                <Card.Text className="mt-3 text-muted">
                  log4(x * 8) = 5{<br />}x * 8 = 4⁵{<br />}
                  4⁵ = 1024{<br />}x * 8 = 1024{<br />}x = 1024/8{<br />}
                  Resultado: X = 128
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}{" "}
      {/* ---------------- Soma de PA e PG -------------------- */}
      {topico === "soma-de-pa-e-pg" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                Em uma Progressão Aritmética (PA), o primeiro termo é 5 e a razão é 3. Determine a soma dos 10 primeiros
                termos dessa PA.
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(16)} className="mt-2">
                {mostraSolucao[16] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[16] && (
                <Card.Text className="mt-3 text-muted">
                  Dados:{<br />}- Primeiro termo (a1) = 5 {<br />}- Razão (r) = 3 {<br />}- Número de termos (n) = 10
                  {<br />}
                  {<br />}
                  {<br />}A fórmula do termo geral de uma PA é:
                  {<br />}
                  an = a1 + (n - 1) . r{<br />}
                  {<br />}
                  Resolução:{<br />}
                  a10 = 5 + (10 - 1) . 3={<br />}
                  a10 = 5 + (9) . 3={<br />}
                  a10 = 5 + 27={<br />}
                  a10 = 32{<br />}
                  {<br />}
                  {<br />}
                  Calculando a Soma da PA:
                  {<br />}
                  {<br />}A fórmula para a soma da PA é:
                  {<br />}
                  {<br />}
                  Sn = n/2 . (a1 + an)
                  {<br />}
                  {<br />}
                  Resolução:{<br />}
                  Sn = 10/2 . (5 + 32)= {<br />}
                  Sn = 5 . (37)={<br />}
                  Sn = 185{<br />}
                  {<br />}
                  Resposta: A soma dos 10 primeiros termos é 185.
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                Em uma Progressão Geométrica (PG), o primeiro termo é 2 e a razão é 4. Calcule a soma dos 6 primeiros
                termos dessa PG.
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(17)} className="mt-2">
                {mostraSolucao[17] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[17] && (
                <Card.Text className="mt-3 text-muted">
                  Dados:{<br />}- Primeiro termo (a1) = 2{<br />}- Razão (q) = 4{<br />}- Número de termos (n) = 6
                  {<br />}
                  {<br />}
                  {<br />}A fórmula para a soma da PG é:
                  {<br />}
                  {<br />}
                  Sn = a1 . (qⁿ - 1){<br />}
                  -------------------{<br />}
                  ㅤㅤ q - 1{<br />}
                  {<br />}
                  Resolução:{<br />}
                  {<br />}
                  ㅤㅤ2 . (4⁶ - 1){<br />}
                  S6 = ------------- ={<br />}
                  ㅤㅤㅤ4 - 1{<br />}
                  {<br />}
                  4⁶ = 4096 {<br />}4096 - 1 = 4095{<br />}
                  {<br />}
                  ㅤㅤㅤ2 . (4095){<br />}
                  S6 = ------------ ={<br />}
                  ㅤㅤㅤㅤ3{<br />}
                  ㅤㅤㅤ8190{<br />}
                  S6 = ------------ ={<br />}
                  ㅤㅤㅤㅤ3{<br />}
                  S6 = 2730{<br />}
                  {<br />}
                  {<br />}
                  Resposta: A soma dos 6 primeiros termos é 2730.
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}
      {/* ---------------- Cotangente, Cossecante, Secante -------------------- */}
      {topico === "cotangente-cossecante-secante" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de cot(0) para um ângulo 0 = 45°</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(18)} className="mt-2">
                {mostraSolucao[18] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[18] && (
                <Card.Text className="mt-3 text-muted">
                  Resolução:{<br />}
                  cot(0) = 1{<br />}
                  -------------{<br />}ㅤ tan(0){<br />}
                  {<br />}
                  tan(45°) = 1{<br />}
                  {<br />}
                  cot(45°) = 1 {<br />}
                  ㅤㅤㅤㅤ----- = 1{<br />}
                  ㅤㅤㅤㅤㅤ1 {<br />}
                  {<br />}
                  Resposta: cot(45°) é 1.{<br />}
                  {<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de sec(0) para um ângulo 0 = 30°</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(19)} className="mt-2">
                {mostraSolucao[19] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[19] && (
                <Card.Text className="mt-3 text-muted">
                  Resolução:{<br />}
                  sec(0) = 1{<br />}
                  -----------{<br />}ㅤ cos(0){<br />}
                  {<br />}
                  cos(30°) = √3{<br />}
                  ㅤㅤㅤㅤ-------{<br />}
                  ㅤㅤㅤㅤㅤ 2{<br />}
                  {<br />}
                  sec(30°) = 1 {<br />}
                  ㅤㅤㅤㅤ-----{<br />}
                  ㅤㅤㅤ √3 / 2{<br />}
                  {<br />}
                  sec(30°) = 2 = 2√3{<br />}
                  ㅤㅤㅤ ------ ------{<br />}
                  ㅤㅤㅤ √3 ㅤㅤ3{<br />}
                  {<br />}
                  Resposta: sec(30°) = 2√3{<br />}
                  ㅤㅤㅤㅤㅤㅤㅤㅤ--------{<br />}
                  ㅤㅤㅤㅤㅤㅤㅤㅤㅤ 3{<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de csc(0) para um ângulo 0 = 60°</Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(20)} className="mt-2">
                {mostraSolucao[20] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[20] && (
                <Card.Text className="mt-3 text-muted">
                  Resolução:{<br />}
                  csc(0) = 1{<br />}
                  ㅤㅤㅤ-----{<br />}
                  ㅤㅤㅤsin(0){<br />}
                  {<br />}
                  sin(60°) = √3{<br />}
                  ㅤㅤㅤㅤ-----{<br />}
                  ㅤㅤㅤㅤㅤ2{<br />}
                  {<br />}
                  csc(60°) = 1{<br />}
                  ㅤㅤㅤㅤ------{<br />}
                  ㅤㅤㅤㅤ√3 / 2{<br />}
                  {<br />}
                  csc(60°) = 2 = 2√3{<br />}
                  ㅤㅤㅤㅤ---- ㅤ-----{<br />}
                  ㅤㅤㅤㅤ√3 ㅤㅤ 3{<br />}
                  {<br />}
                  Resposta: csc(60°) = 2√3{<br />}
                  ㅤㅤㅤㅤㅤㅤㅤㅤㅤ-----{<br />}
                  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ3
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}
      {/* ---------------- Função Exponencial -------------------- */}
      {topico === "funcao-exponencial" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                1. Uma população de bactérias cresce exponencialmente de acordo com a função 𝑃 (𝑡) = 200 ⋅ 2 𝑡
                P(t)=200⋅2 t , onde 𝑡 t é o tempo em horas. <br />
                Qual será a população de bactérias após 3 horas?
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(21)} className="mt-2">
                {mostraSolucao[21] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[21] && (
                <Card.Text className="mt-3 text-muted">
                  Substituindo t=3 na função:
                  <br /> P(3) = 200 ⋅ 2³
                  <br /> P(3)=200 ⋅ 8 <br />
                  P(3) = 1600
                  <br /> Após 3 horas, a população de bactérias será de 1600 bactérias.
                </Card.Text>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                2. Um certo produto químico decai exponencialmente de acordo com a função Q(t) = Q<sub>0</sub> &middot;
                e<sup>-0,1t</sup>, onde Q<sub>0</sub> é a quantidade inicial do produto e t é o tempo em horas. Sabendo
                que a quantidade inicial é de 100 mg, qual será a quantidade restante após 10 horas?
                <br />
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(22)} className="mt-2">
                {mostraSolucao[22] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[22] && (
                <Card.Text className="mt-3 text-muted">
                  Substituindo Q<sub>0</sub> = 100 e t = 10:
                  <br />
                  Q(10) = 100 &middot; e<sup>-0,1 &middot; 10</sup>
                  <br />
                  Q(10) = 100 &middot; e<sup>-1</sup>
                  <br />
                  Q(10) = 100 &middot; 0,3679
                  <br />
                  Q(10) = 36,79
                  <br />
                  Após 10 horas, restarão aproximadamente 36,79 mg do produto químico.
                </Card.Text>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                3. Um remédio no corpo de uma pessoa se decompõe a uma taxa de 30% a cada hora. Se a quantidade inicial
                de remédio é 200 mg, escreva a função que descreve a quantidade de remédio ao longo do tempo e calcule a
                quantidade que restará após 3 horas.
                <br />
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(23)} className="mt-2">
                {mostraSolucao[23] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[23] && (
                <Card.Text className="mt-3 text-muted">
                  A função que descreve a quantidade de remédio é:
                  <br />
                  Q(t) = 200 &middot; (0,7)<sup>t</sup>
                  <br />
                  Para t = 3:
                  <br />
                  Q(3) = 200 &middot; (0,7)<sup>3</sup>
                  <br />
                  Q(3) = 200 &middot; 0,343
                  <br />
                  Q(3) = 68,6
                  <br />
                  Após 3 horas, restarão aproximadamente 68,6 mg de remédio no corpo.
                </Card.Text>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                4. O valor de um carro se deprecia 15% ao ano. Se o valor inicial do carro é de R$40.000,00; escreva a
                função exponencial que descreve o valor do carro ao longo do tempo e calcule se valor após 5 anos.
                <br />
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(24)} className="mt-2">
                {mostraSolucao[24] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[24] && (
                <Card.Text className="mt-3 text-muted">
                  A função exponencial que descreve o valor do carro ao longo desse período é:
                  <br />
                  V(t) = 40000 &middot; (0,85)<sup>t</sup>
                  <br />
                  Substituindo t = 5:
                  <br />
                  V(5) = 40000 &middot; (0,85)<sup>5</sup>
                  <br />
                  V(5) = 40000 &middot; 0,4437
                  <br />
                  V(5) = 17748
                  <br />
                  Após 5 anos, o valor do carro será de aproximadamente R$17.748,00.
                </Card.Text>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                5. Uma cidade tem uma população inicial de 50.000 habitantes e cresce a uma taxa de 4% ao ano. Escreva a
                função que representa o crescimento dessa cidade daqui à 8 anos.
                <br />
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(25)} className="mt-2">
                {mostraSolucao[25] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[25] && (
                <Card.Text className="mt-3 text-muted">
                  A função é dada por:
                  <br />
                  P(t) = 50000 &middot; (1 + 0,04)<sup>t</sup>
                  <br />
                  Para 8 anos, t = 8:
                  <br />
                  P(8) = 50000 &middot; (1 + 0,04)<sup>8</sup>
                  <br />
                  P(8) = 50000 &middot; 1,3686
                  <br />
                  P(8) = 68430
                  <br />
                  Após 8 anos, a cidade terá uma população prevista de aproximadamente 68.430 habitantes.
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}
      {topico === "calculadora" && (
        <>
          <Calculator />
        </>
      )}
      {/* ---------------- Conversâo de unidade -------------------- */}
      {topico === "conversao-de-unidade" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                Uma estrada tem 120 km de comprimento. Um carro viaja por essa estrada a uma velocidade constante de 80
                km/h. Converta essa distância para metros e a velocidade para metros por segundo (m/s). Em seguida,
                calcule quanto tempo o carro levará para percorrer toda a estrada em segundos.
              </Card.Title>
              <Button variant="info" onClick={() => toggleSolucao(21)} className="mt-2">
                {mostraSolucao[21] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[21] && (
                <Card.Text className="mt-3 text-muted">
                  1. Conversão da distância de quilômetros (km) para metros (m):{<br />}
                  Sabemos que 1 km = 1.000 m.{<br />}
                  120km= 120x1.000 = 120.000m{<br />}
                  2. Conversão da velocidade de quilômetros por hora (km/h) para metros por segundo (m/s):{<br />}
                  Sabemos que para converter km/h para m/s, dividimos o valor por 3,6, já que 1 km/h = {<br />}
                  1.000/3.600m/s{<br />}
                  80km/h = 80 / 3,6 = 22,22m/s{<br />}
                  3. Cálculo do tempo em segundos:{<br />}
                  Sabemos que o tempo é dado pela fórmula:{<br />}t = 120.000m / 22,22m/s = 5.400 segundos{<br />}
                  Resposta final:{<br />}O carro levará aproximadamente 5.400 segundos para percorrer toda a estrada.
                  {<br />}
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
};

export default QuestaoPage;
