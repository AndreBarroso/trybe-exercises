/* ***Exercícios do Dia *** */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/* 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores 
nele contidos com a função console.log() ;*/
for(var i=0; i<numbers.length;i++){
    console.log('Valor do índice '+i+ ': '+numbers[i]);
}

/* 2 - Somar todos os valores do array e imprimir o resultado*/
var soma = 0;
for(i=1; i<numbers.length;i++){
    soma = soma + numbers[i];
}
console.log();
console.log('Soma de todos os valores acima:',soma);

/* 3 - Calcular média aritimética dos valores contidos no array*/
var media;
media=soma/numbers.length;
console.log();
console.log('A média aritimética dos valores do array acima é:',media);

/* 4 - Verifica se a média é maior ou menor que 20*/
if(media>20){
    console.log('Valor maior que 20')
}
else {
    console.log('Valor menor ou igual a 20');
}
console.log();

/*5 Descubir o maior valor do array e imprimir*/
var maior = 0;
for(i=0 ; i<numbers.length;i++){
    if(numbers[i] > maior){
        maior = numbers[i];
    }
}
console.log('O maior número do array numbers é:', maior);
console.log();

/*6 - Descubrir quantos valores ímpares existem no array*/
var impares = 0;
for(i=0 ; i<numbers.length;i++){
    if(numbers[i]%2!==0){
        impares++;
    }
}

if(impares>0){
    console.log('Existem ' + impares + ' valores ímpares no vetor.');
}
else{
    console.log('Nenhum valor impar encontrado.');
}
console.log();

/*7 - Descubrir o menor valor do array*/
var menor = numbers[0];
for(i=0 ; i<numbers.length;i++){
    if(numbers[i] < menor){
        menor = numbers[i];
    }
}
console.log(menor);
console.log();

/*8 - Criar um array que vá de 1 a 25*/
var newArray = [];

for(i=1 ; i<=25; i++){
    newArray.push(i);
}
console.log(newArray);
console.log();

/*9 - Impirmir cada valor do array criado acima, dividido por 2*/
for(i=0; i<newArray.length; i++ ){
    console.log(newArray[i]/2);
}


