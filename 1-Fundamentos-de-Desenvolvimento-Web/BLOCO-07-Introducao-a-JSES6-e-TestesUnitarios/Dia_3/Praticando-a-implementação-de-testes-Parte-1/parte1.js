const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4,5), 9, 'A soma entre 4 e 5 deve ser 9');
assert.strictEqual(sum(0,0), 0, 'A soma entre 0 e 0 deve ser 0');
const a = assert.throws(() => {
    sum(4, '5');
}, TypeError( 'Uma das entradas não foi número'));
