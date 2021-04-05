
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  let sum = 0;
  const ret =  names.reduce((acumulado, nome) => acumulado + nome).toLocaleLowerCase().split('');
  ret.forEach(element => {
      if(element === 'a') sum += 1;
  });

  return sum;
}
console.log(containsA());

assert.deepStrictEqual(containsA(), 20);