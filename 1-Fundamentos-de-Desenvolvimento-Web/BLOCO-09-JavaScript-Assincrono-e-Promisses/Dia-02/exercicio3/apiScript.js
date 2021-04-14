// apiScript.js    


const promise = new Promise((resolve, reject) => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array[i] = Math.pow(Math.floor(Math.random() * 51), 2)
  }
  const sum = array.reduce((acc, cur) => {
    return acc + cur;
  })
  if (sum > 8000) return reject(sum);
  resolve ([sum/2, sum/3, sum/5, sum/10]);
}).then((number) => console.log(number.reduce((cur, acc) => cur + acc)))
  .catch((number) => console.log(`É de mais de 8000 `));



