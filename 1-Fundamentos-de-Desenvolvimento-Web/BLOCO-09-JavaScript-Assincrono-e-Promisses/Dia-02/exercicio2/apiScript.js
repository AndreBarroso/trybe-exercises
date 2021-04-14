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
  resolve (sum);
}).then((number) => console.log(`Promise resolvida. O resultado é ${number}`))
  .catch((number) => console.log(`Promise rejeitada o valor foi de ${number}`));



