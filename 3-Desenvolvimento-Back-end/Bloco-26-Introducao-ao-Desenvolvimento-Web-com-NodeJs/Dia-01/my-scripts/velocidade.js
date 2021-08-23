const readline = require('readline-sync');

const d = readline.questionInt("Entre com a distancia percorrida em metros: "); 
const t = readline.questionInt("Entre com o tempo em segundos: ")

function calculaVelocidade( distancia, tempo) {
  return (distancia/tempo).toFixed(2);
}

console.log(calculaVelocidade(d, t))
