var word='arara';

/* Exercicio 1 */
function verificaPalindrome(palavra){
    var i=0;
    if(palavra.length%2===0){
        return false;
    }
    for(i=0; i<palavra.length/2; i+=1){
        if(palavra[i]!==palavra[palavra.length-i-1]){
            return false;
        }
    }
    return true;
}
console.log(verificaPalindrome(word));
console.log('');


/* Exercicio 2 */
function retornaMaior(array){
    let maior = 0;
    let index;
    for(let i=0; i<array.length; i+=1){
        if(array[i]>maior){
            maior=array[i];
            index=i;
        }
    }
    return index;
}
console.log(retornaMaior([2, 3, 6, 7, 10, 1]));
console.log('');


/* Exercicio 3 */
function retornaMenor(array){
    let index = 0;
    for(let i=0; i<array.length; i+=1){
        if(array[i]<array[index]){
            index=i;
        }
    }
    return index;
}
console.log(retornaMenor([2, 4, 6, 7, 10, 0, -3]));
console.log('');


/* Exercicio 4 */
function retornaMaiorNome(nome){
    let maiorNome = nome[0];
    for(indice in nome){
        if(nome[indice].length>maiorNome.length ){
            maiorNome =nome[indice];
        }
    }
    return maiorNome ;
}
console.log(retornaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log('');

/* Exercicio 5 */
function maisRepetido(array){
    let resultado;
    let contador = 0;;
    let maiorContagem=0;
    let valorVerificado;
    for(let i=0; i<array.length; i+=1){
        valorVerificado=array[i];
        contador=0;
        for(var j = 0; j < array.length; j ++){
            if(array[j]===array[i] && j!==i){
                contador+=1;
            }
        }
        if(contador > maiorContagem){
            maiorContagem = contador;
            resultado = array[i];
        }
    }
    return resultado;
}
console.log(maisRepetido( [2, 1, 1, 1, 8, 2, 3]));