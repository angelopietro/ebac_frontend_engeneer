import React, { useState } from 'react';

const CalculoIMC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultadoImc, setResultadoImc] = useState('');
  const [mensagem, setMensagem] = useState('');

  const realizarCalculo = () => {
    if (!altura && !peso) {
      return;
    }

    const calculoAltura = altura / 100;
    const calculoImc = peso / (calculoAltura * calculoAltura);
    const imc = calculoImc.toFixed(2);
    setResultadoImc(imc);
    const mensagemImc = `Seu IMC é ${imc}`;

    if (imc < 18.5) {
      setMensagem(`${mensagemImc} - Você está abaixo do peso ideal!`);
    } else if (imc <= 24.9) {
      setMensagem(`${mensagemImc} - Você está em seu peso ideal!`);
    } else if (imc <= 29.9) {
      setMensagem(`${mensagemImc} - Você está com sobrepeso`);
    } else if (imc <= 39.9) {
      setMensagem(`${mensagemImc} - Você está em nível de obesidade`);
    } else {
      setMensagem(`${mensagemImc} - Você está em nível de obesidade grave`);
    }
 
    setTimeout(() => {
      setAltura('');
      setPeso('');
      setResultadoImc('');
      setMensagem('');
    }, 5000);
  };

  return (
    <div className="calculator-container">
      <h1>Calculadora IMC EBAC</h1>
      <div className="input-group">
        <label>Informe a sua altura em cm</label>
        <input
          type="number"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Informe o seu peso em Kg</label>
        <input
          type="number"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
      </div>
      <button onClick={realizarCalculo}>Calcular</button>

      {resultadoImc && <div className="result">{mensagem}</div>}
    </div>
  );
};

export default CalculoIMC;
