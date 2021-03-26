const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}
// implemente seus testes aqui
assert.strictEqual(typeof(myRemoveWithoutCopy), 'function')
//1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1,2,4]);

//2 
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//3
const arrTest = [1, 2, 3, 4, 5, 6];
myRemoveWithoutCopy(arrTest, 2);
assert.notDeepStrictEqual(arrTest, [1, 2, 3, 4, 5, 6]);

//4 
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);