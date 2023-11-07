const alunos = [
  {
      nome: "Leonardo",
      nota: 9.8,
  },
  {
      nome: "Raphael",
      nota: 6.0,
  },
  {
      nome: "Donatello",
      nota: 4.2,
  },
  {
      nome: "Michelangelo",
      nota: 5.9,
  },
  {
      nome: "Mr. Splinter",
      nota: 10,
  },
];

const alunosAprovados = () => alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados());
