
//Exercicio 1
const fatora = (numero) => {
    let fat = numero;
    for (let i = numero - 1; i >= 1; i -= 1) {
        fat = fat*i;
    }
    return fat;
}
console.log(fatora(4));


//Exercicio 2
const retornaMaior = (string) => {
    const array = string.split(' ');
    let maiorPalavra = array[0];
    for (let i = 0 ; i < array.length; i += 1) {
        if (array[i].length > maiorPalavra.length) {
            maiorPalavra = array[i];
        }
    }
    return maiorPalavra;
}
console.log(retornaMaior("Antônio foi no banheiro e não sabemos o que aconteceu"));

//Exercicio 3
const but = document.getElementById('but');
const nClicks = document.getElementById('nclicks');
let clickCount = 0;
var cont=0

but.addEventListener('click', () =>  nClicks.innerText = cont += 1);


// Exercício 4
let skills = ['javaScript', 'css', 'html', 'react', 'nodeJs']
const change = (palavra, substitui) => palavra.split('x').join(substitui);
const phrase = change('Tryber x aqui!', 'Bebeto');
const concat = (frase) => {
    return `${frase} Minhas cinco proncipais habilidades são:
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}
    ${skills[3]}
    ${skills[4]} #goTrybe.`
}
console.log(concat(change(phrase)));
