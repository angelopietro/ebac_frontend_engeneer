<script setup>
import { reactive, computed } from "vue";

const dados = reactive({
  valorA: 0,
  valorB: 0,
  operacao: "somar",
});

const resultado = computed(() => {
  switch (dados.operacao) {
    case "somar":
      return dados.valorA + dados.valorB;
    case "subtrair":
      return dados.valorA - dados.valorB;
    case "multiplicar":
      return dados.valorA * dados.valorB;
    case "dividir":
      return dados.valorA / dados.valorB;
    default:
      return null;
  }
});
</script>

<template>
  <div class="calculator-container">
    <h1>Calculadora EBAC Vuejs</h1>

    <div class="input-group">
      <label>Informe o primeiro valor</label>
      <input
        v-model="dados.valorA"
        type="number"
        id="valorA"
        @input="calcular"
      />
    </div>

    <div class="input-group">
      <label>Selecione o tipo de operação</label>
      <select v-model="dados.operacao" id="operacao" @change="calcular">
        <option value="somar">Somar</option>
        <option value="subtrair">Subtrair</option>
        <option value="multiplicar">Multiplicar</option>
        <option value="dividir">Dividir</option>
      </select>
    </div>

    <div class="input-group">
      <label>Informe o segundo valor</label>
      <input
        v-model="dados.valorB"
        type="number"
        id="valorB"
        @input="calcular"
      />
    </div>

    <div class="result">
      <h2>O resultado é: {{ resultado }}</h2>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  color: #333;
}

.calculator-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-weight: 300;
}

h1 {
  text-align: center;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-weight: 500;
}

input,
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
}

h2 {
  margin: 10px 0 0;
  color: #333;
}

.result {
  text-align: center;
}
</style>
