const readline = require('readline-sync');

function calculaIMC(pes, alt) {
  return pes/(alt*alt);
}

function healthSituation(func, pes, alt) {
  const imc = func(pes, alt);
  console.log('Seu IMC é: ', imc)
  if(imc < 18.5) console.log('Abaixo do peso (magreza)');
  if(imc >= 18.5 && imc <= 24.9) console.log('Peso normal');
  if(imc >= 25 && imc <= 29.9) console.log('Acima do peso (sobrepeso)');
  if(imc >= 30 && imc <= 34.9) console.log('Obesidade grau I');
  if(imc >= 35 && imc <= 39.9) console.log('Obesidade grau I');
  if(imc > 40) console.log('Obesidade graus III e IV');
}
const peso = readline.questionFloat('Qual seu peso em kg ');
const altura = readline.questionFloat('Qual sua altura em metros? ');

healthSituation(calculaIMC, peso, altura)