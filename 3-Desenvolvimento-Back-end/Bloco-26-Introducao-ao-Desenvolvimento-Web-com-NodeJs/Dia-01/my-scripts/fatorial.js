const readline = require('readline-sync');

const factorial = () => {
  const n = readline.questionInt('Digite o número para descobrir seu fatorial: ');
  if(typeof n !== 'number') {
    console.log('Digite um valor válido')
    return factorial();
  }
  let fac = n;
  for(let i = n - 1; i >= 1; i-=1) {
    fac = fac * i;
  }
  return console.log(fac)
}
factorial();


