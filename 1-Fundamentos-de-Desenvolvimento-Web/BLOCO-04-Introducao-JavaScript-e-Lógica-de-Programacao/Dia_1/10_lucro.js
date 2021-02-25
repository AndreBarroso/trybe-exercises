/* Programa que calcula o lucro */

let custo =10;
let valorVenda =20;
const imposto = 0.2;
let valorCustoTotal;
let lucro;

if(custo==0||valorVenda==0){
    console.log('Erro. Entre com valors válidos para custo do produto e seu valor de venda');
}

valorCustoTotal = custo + custo*imposto;
lucro = 1000 * (valorVenda - valorCustoTotal);

console.log(lucro);


