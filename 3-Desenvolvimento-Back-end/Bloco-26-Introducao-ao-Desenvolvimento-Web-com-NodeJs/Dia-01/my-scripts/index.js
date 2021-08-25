const readline = require('readline-sync');
const convert = require('./velocidade');

console.log(convert(100, 50))

// function choiceScript() {
//   const choices = ['./imc.js', './velocidade.js', './sorteio.js', './fatorial.js', './fibonacci']

//   const question = readline.questionInt(
//     `Digite qual script você deseja executar
//     1 - Calcular IMC
//     2 - Para velocidade
//     3 - Para o jogo de sorteio
//     4 - Calcular fatorial
//     5 - fibonacci `
  
//   ) - 1;
//   if(question !== 0 &&  question !== 1 &&  question !== 2 && question !== 3 && question !== 4) {
//     return console.log("Escolha um valor válido entre 1 e 5")
//   }
//   return choices[question];
// }
// require(choiceScript());