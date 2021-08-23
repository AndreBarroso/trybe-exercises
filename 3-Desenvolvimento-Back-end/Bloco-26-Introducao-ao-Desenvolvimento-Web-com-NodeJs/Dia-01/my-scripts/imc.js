const readline = require('readline-sync');

function calculaIMC(peso, altura) {
  return peso/(altura*altura)
}

const peso = readline.questionFloat('Qual seu peso em kg ');
const altura = readline.questionFloat('Qual sua altura em metros? ');

console.log(calculaIMC(peso, altura))