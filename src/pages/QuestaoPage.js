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

                    {/* -------------- progressao aritmetica------------- */}

      {topico === "progressao-geometrica" && (
        <>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Uma progressão geométrica possui o primeiro termo igual a 5 e a razão 7. O sétimo termo dessa pg é:</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(0)}
                className="mt-2"
              >
                {mostraSolucao[0] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[0] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1.q(n-1){<br/>}
                  an=5.7(7-1){<br/>}
                  an=5.7(6){<br/>}
                  an=5.177.649{<br/>}
                  an=588.245{<br/>}
                  Resultado: O sétimo termo dessa pg é 588.245
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>A seguinte sequência é uma progressão geométrica, observe: (2,6,18,54…) Determine o 8º termo dessa progressão.</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(1)}
                className="mt-2"
              >
                {mostraSolucao[1] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[1] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1*q(n-1){<br/>}
                  a8=2*3(8-1){<br/>}
                  a8=2*3(7){<br/>}
                  a8=2*2187{<br/>}
                  a8=4374{<br/>}
                  Resultado: O 8º termo dessa progressão é 4374
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Qual o valor do 6º termo de uma progressão geométrica em que o primeiro termo é 6 e a razão é 2?</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(2)}
                className="mt-2"
              >
                {mostraSolucao[2] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[2] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1*q(n-1){<br/>}
                  a6=3*2(6-1){<br/>}
                  a6=3*2(5){<br/>}
                  a6=3*32{<br/>}
                  a6=160{<br/>}
                  Resultado: O valor do 6º termo dessa progressão é 160.

                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Em uma progressão geométrica, o primeiro termo é 4 e a razão é 2. Qual o valor do 3º termo?</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(3)}
                className="mt-2"
              >
                {mostraSolucao[3] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[3] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1*q(n-1){<br/>}
                  a3=4*2(3-1){<br/>}
                  a3=4*2(2){<br/>}
                  a3=4*4{<br/>}
                  a3=16{<br/>}
                  Resultado: O 3º termo é 16.
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Em uma progressão geométrica, o primeiro termo é 10 e o segundo termo é 15. Qual a razão da PG e o valor do terceiro termo?</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(4)}
                className="mt-2"
              >
                {mostraSolucao[4] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[4] && (
                <Card.Text className="mt-3 text-muted">
                  an=a1*q(n-1){<br/>}
                  a3= a1*q(3-1){<br/>}
                  a3=10.1,5(2){<br/>}
                  a3=10*2,25{<br/>}
                  a3=22,5{<br/>}
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
              <Card.Title>Calcule o valor de x na equação:  log2(x) = 5

              </Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(5)}
                className="mt-2"
              >
                {mostraSolucao[5] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[5] && (
                <Card.Text className="mt-3 text-muted">
                  log2(x) = 5 <br></br>
                   x = 2⁵<br></br>

                  x = 32
                   
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Simplifique a expressão  log3(27)</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(6)}
                className="mt-2"
              >
                {mostraSolucao[6] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[6] && (
                <Card.Text className="mt-3 text-muted">
                  log3(27) = log3(3³){<br/>}
                  log3(3³) = 3.log3(3) = 3 * 1 = 3{<br/>}
                  log3(27) = 3{<br/>}
                 
                  
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação: log10(x + 4) = 2</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(7)}
                className="mt-2"
              >
                {mostraSolucao[7] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[7] && (
                <Card.Text className="mt-3 text-muted">
                  log10(a) = c{<br/>}
                  a = 10^c{<br/>}
                  log10(x+4) = 2{<br/>}
                  x + 4 = 10²{<br/>}
                  x + 4 = 100{<br/>}
                  x + 4 = 100{<br/>}
                  x = 100 - 4{<br/>}
                  x = 96{<br/>}

                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Dada a expressão log5(125), encontre seu valor.</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(8)}
                className="mt-2"
              >
                {mostraSolucao[8] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[8] && (
                <Card.Text className="mt-3 text-muted">
                  log5(125) = log5(5³){<br/>}
                  log5(5³) = 3 * log5(5) = 3 * 1 = 3{<br/>}
                  log5(125) = 3{<br/>}
                  
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação:  log4(x) + log4(8) = log4(x * 8) </Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(9)}
                className="mt-2"
              >
                {mostraSolucao[9] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[9] && (
                <Card.Text className="mt-3 text-muted">
                  log4(x * 8) = 5{<br/>}
                  x * 8 = 4⁵{<br/>}
                  4⁵ = 1024{<br/>}
                  x * 8 = 1024{<br/>}
                  x = 1024/8{<br/>}
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
              <Card.Title>Dois lados de um terreno de forma triangular medem 15 m e 10 m,
                 formando um ângulo de 60°. O comprimento do muro necessário para cercar o terreno, em metros, é:<br></br>
                                  
                      a) 5(5 + √15)<br></br>
                      b) 5(5 + √5)<br></br>
                      c) 5(5 + √13)<br></br>
                      d) 5(5 + √11)<br></br>
                      e) 5(5 + √7)<br></br>


              </Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(10)}
                className="mt-2"
              >
                {mostraSolucao[10] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[10] && (
                <Card.Text className="mt-3 text-muted">
                  x2 = 102 + 152 – 2·10·15·cos60°<br></br>
                  x2 = 100 + 225 – 2·150·cos60°<br></br>
                  x2 = 325 – 300·1/2<br></br>
                  x2 = 325 – 150<br></br>
                  x2 = 175<br></br>
                  x = √175<br></br>
                  x = √[5·35]<br></br>
                  x = √[5·5·7]<br></br>
                  x = √[52·7]<br></br>
                  x = 5√7<br></br>
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
              <Card.Title>Simplifique a expressão  log3(27)</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(11)}
                className="mt-2"
              >
                {mostraSolucao[11] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[11] && (
                <Card.Text className="mt-3 text-muted">
                  log3(27) = log3(3³){<br/>}
                  log3(3³) = 3.log3(3) = 3 * 1 = 3{<br/>}
                  log3(27) = 3{<br/>}
                 
                    
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação: log10(x + 4) = 2</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(12)}
                className="mt-2"
              >
                {mostraSolucao[12] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[12] && (
                <Card.Text className="mt-3 text-muted">
                  log10(a) = c{<br/>}
                  a = 10^c{<br/>}
                  log10(x+4) = 2{<br/>}
                  x + 4 = 10²{<br/>}
                  x + 4 = 100{<br/>}
                  x + 4 = 100{<br/>}
                  x = 100 - 4{<br/>}
                  x = 96{<br/>}

                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Dada a expressão log5(125), encontre seu valor.</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(13)}
                className="mt-2"
              >
                {mostraSolucao[13] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[13] && (
                <Card.Text className="mt-3 text-muted">
                  log5(125) = log5(5³){<br/>}
                  log5(5³) = 3 * log5(5) = 3 * 1 = 3{<br/>}
                  log5(125) = 3{<br/>}
                  
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação:  log4(x) + log4(8) = log4(x * 8) </Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(14)}
                className="mt-2"
              >
                {mostraSolucao[14] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[14] && (
                <Card.Text className="mt-3 text-muted">
                  log4(x * 8) = 5{<br/>}
                  x * 8 = 4⁵{<br/>}
                  4⁵ = 1024{<br/>}
                  x * 8 = 1024{<br/>}
                  x = 1024/8{<br/>}
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
              <Card.Title>Dois lados de um terreno de forma triangular medem 15 m e 10 m,
                 formando um ângulo de 60°. O comprimento do muro necessário para cercar o terreno, em metros, é:<br></br>
                                  
                      a) 5(5 + √15)<br></br>
                      b) 5(5 + √5)<br></br>
                      c) 5(5 + √13)<br></br>
                      d) 5(5 + √11)<br></br>
                      e) 5(5 + √7)<br></br>


              </Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(10)}
                className="mt-2"
              >
                {mostraSolucao[10] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[10] && (
                <Card.Text className="mt-3 text-muted">
                  x2 = 102 + 152 – 2·10·15·cos60°<br></br>
                  x2 = 100 + 225 – 2·150·cos60°<br></br>
                  x2 = 325 – 300·1/2<br></br>
                  x2 = 325 – 150<br></br>
                  x2 = 175<br></br>
                  x = √175<br></br>
                  x = √[5·35]<br></br>
                  x = √[5·5·7]<br></br>
                  x = √[52·7]<br></br>
                  x = 5√7<br></br>
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
              <Card.Title>Simplifique a expressão  log3(27)</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(11)}
                className="mt-2"
              >
                {mostraSolucao[11] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[11] && (
                <Card.Text className="mt-3 text-muted">
                  log3(27) = log3(3³){<br/>}
                  log3(3³) = 3.log3(3) = 3 * 1 = 3{<br/>}
                  log3(27) = 3{<br/>}
                 
                    
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação: log10(x + 4) = 2</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(12)}
                className="mt-2"
              >
                {mostraSolucao[12] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[12] && (
                <Card.Text className="mt-3 text-muted">
                  log10(a) = c{<br/>}
                  a = 10^c{<br/>}
                  log10(x+4) = 2{<br/>}
                  x + 4 = 10²{<br/>}
                  x + 4 = 100{<br/>}
                  x + 4 = 100{<br/>}
                  x = 100 - 4{<br/>}
                  x = 96{<br/>}

                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Dada a expressão log5(125), encontre seu valor.</Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(13)}
                className="mt-2"
              >
                {mostraSolucao[13] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[13] && (
                <Card.Text className="mt-3 text-muted">
                  log5(125) = log5(5³){<br/>}
                  log5(5³) = 3 * log5(5) = 3 * 1 = 3{<br/>}
                  log5(125) = 3{<br/>}
                  
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Calcule o valor de x na seguinte equação:  log4(x) + log4(8) = log4(x * 8) </Card.Title>
              <Button
                variant="info"
                onClick={() => toggleSolucao(14)}
                className="mt-2"
              >
                {mostraSolucao[14] ? "Ocultar Solução" : "Mostrar Solução"}
              </Button>
              {mostraSolucao[14] && (
                <Card.Text className="mt-3 text-muted">
                  log4(x * 8) = 5{<br/>}
                  x * 8 = 4⁵{<br/>}
                  4⁵ = 1024{<br/>}
                  x * 8 = 1024{<br/>}
                  x = 1024/8{<br/>}
                  Resultado: X = 128

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
