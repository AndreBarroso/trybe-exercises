const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (word) => {
    let arr = [];
    for( let i = 0; i < word.length; i += 1) {
        arr.push(word[i].length);
    }
    return arr;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);