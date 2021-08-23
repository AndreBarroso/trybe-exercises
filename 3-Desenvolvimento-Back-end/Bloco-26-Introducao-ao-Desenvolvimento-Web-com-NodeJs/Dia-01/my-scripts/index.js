const readline = require('readline-sync');

function choiceScript() {
  const choices = ['./imc.js', './velocidade.js', './sorteio.js', './fatorial.js']

  const question = readline.questionInt(
    `Digite qual script você deseja executar
    1 - Calcular IMC
    2 - Para velocidade
    3 - Para o jogo de sorteio
    4 - Calcular fatorial`
  ) - 1;
  if(question !== 0 &&  question !== 1 &&  question !== 2 && question !== 3) {
    return console.log("Escolha um valor válido entre 1 e 4")
  }
  return choices[question];
}
require(choiceScript());