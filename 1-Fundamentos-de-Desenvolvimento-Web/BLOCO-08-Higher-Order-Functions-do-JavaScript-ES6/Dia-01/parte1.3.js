// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const verifyAnswer = gabarito => aSerValidada => gabarito === aSerValidada? 'Resposta correta':'Resposta errada';

const valida = verifyAnswer('higher order function')('higher order function');

console.log(valida);