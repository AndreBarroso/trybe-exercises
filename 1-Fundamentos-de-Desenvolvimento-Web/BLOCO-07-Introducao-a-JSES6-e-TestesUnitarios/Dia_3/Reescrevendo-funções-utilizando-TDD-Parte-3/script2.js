const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let vog = 0;
    for (let index = 0; index < characters.length; index += 1) {
      if (
        characters[index] === 'a' ||
        characters[index] === 'o' ||
        characters[index] === 'i' ||
        characters[index] === 'e' ||
        characters[index] === 'u'
      ) {
          vog += 1;
        results.push(vog);
      } else {
        results.push(characters[index]);
      }
    }
    return results.join('');
  };
  
  
  const assert = require('assert');
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  const testa = removeVowels (parameter);
  assert.strictEqual(testa, result);