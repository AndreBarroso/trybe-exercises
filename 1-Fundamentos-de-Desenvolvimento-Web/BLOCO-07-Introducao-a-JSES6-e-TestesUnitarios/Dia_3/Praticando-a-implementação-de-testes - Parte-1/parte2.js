const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const arrTest = [1, 2, 3, 4];
assert.strictEqual(typeof(myRemove), 'function');

// 1 
assert.deepStrictEqual(myRemove(arrTest,3), [1, 2, 4], 'Ao passar 3 como parâmetro, o esperado é [1, 2, 4]');

//2
assert.notDeepStrictEqual(myRemove(arrTest, 3), [1, 2, 3, 4]);

//3 
const myList = [5, 6, 7, 8];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]);

//4
assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4], 'A função deve retirnar [1,2,3,4]')



