const check = (apostado, sorteado) => {
    if (apostado === sorteado) {
        return `Parabéns você ganhou. O numero apostado foi ${apostado} e o sorteado também foi ${sorteado}.`;
    } 
    return `Tente novamente. Voce apostou ${apostado} mas o numero sorteado foi ${sorteado}.`;
}

const result = (apostado, callback) => {
    randomNumber = Math.floor(Math.random()*5 +1);
    return callback(apostado, randomNumber)
}

console.log(result(3, check));


