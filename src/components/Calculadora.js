import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  const calculateBasic = () => {
    try {
      setResult(eval(display));
    } catch (error) {
      setResult("Erro");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
    setResult("");
  };

  const calculatePG = (initialTerm, ratio, numTerms) => {
    const terms = Array.from({ length: numTerms }, (_, i) => initialTerm * Math.pow(ratio, i));
    setResult(terms.join(", "));
  };

  const calculatePA = (initialTerm, ratio, numTerms) => {
    const terms = Array.from({ length: numTerms }, (_, i) => initialTerm + ratio * i);
    setResult(terms.join(", "));
  };

  const calculateTrigFunction = (func) => {
    const radians = parseFloat(display) * (Math.PI / 180); // Converte para radianos
    switch (func) {
      case "sin":
        setResult(Math.sin(radians));
        break;
      case "cos":
        setResult(Math.cos(radians));
        break;
      case "tan":
        setResult(Math.tan(radians));
        break;
      default:
        setResult("Erro");
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
      <h2>Calculadora</h2>
      <input type="text" value={display} readOnly placeholder="Insira os valores" />
      <br />
      <div>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={calculateBasic}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div>
        <button onClick={clearDisplay}>C</button>
      </div>

      <h3>Funções Trigonométricas</h3>
      <div>
        <button onClick={() => calculateTrigFunction("sin")}>sin</button>
        <button onClick={() => calculateTrigFunction("cos")}>cos</button>
        <button onClick={() => calculateTrigFunction("tan")}>tan</button>
      </div>

      <h3>Progressões</h3>
      <div>
        <input
          type="number"
          placeholder="Primeiro termo"
          onChange={(e) => handleButtonClick(e.target.value)}
        />
        <input
          type="number"
          placeholder="Razão"
          onChange={(e) => handleButtonClick(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nº de termos"
          onChange={(e) => handleButtonClick(e.target.value)}
        />
        <button onClick={() => calculatePA(1, 2, 5)}>Calcular PA</button>
        <button onClick={() => calculatePG(1, 2, 5)}>Calcular PG</button>
      </div>

      <h3>Resultado: {result}</h3>
    </div>
  );
};

export default Calculator;