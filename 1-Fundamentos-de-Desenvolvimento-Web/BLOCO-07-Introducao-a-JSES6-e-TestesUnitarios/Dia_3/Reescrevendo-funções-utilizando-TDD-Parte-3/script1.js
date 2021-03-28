const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello ';
    let arr = [];
  
    for (const person in people) {
      arr.push(`${greeting}${people[person]}`)
    }
    return arr;
  };

  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof(greetPeople), 'function');
assert.deepStrictEqual(greetPeople(parameter), result);
