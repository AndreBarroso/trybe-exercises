const check = (apostado, sorteado) => {
    return apostado === sorteado ? 'Parabéns você ganhou': 'Tente novamente';
}

const result = (apostado, callback) => {
    randomNumber = Math.floor(Math.random()*5 +1);
    return callback(apostado, randomNumber)
}

console.log(result(3, check));


