let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

/* Exercicio 1 */
console.log('Bem vinda '+info.personagem+'!');
console.log('');

/* Exercicio 2 */
info['recorrente']='Sim';
console.log(info);
console.log('');

/* Exercicio 3 */
for(var chaves in info){
    console.log(chaves);
}
console.log('');

/* Exercicio 4 */
console.log('');
for(var chaves in info){
    console.log(info[chaves]);
}
console.log('');
console.log('');

/* Exercicio 5 */
var info2 ={};
arrInfo=['Margarida e tio patinhas','Pato Donald e Christmas on Bear Mountain, Dell`s Four Color Comics #178','Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas','Ambos recorrentes // Atenção para essa última linha!']
let i=0;
for(var chaves in info){
    info2[chaves]=arrInfo[i];
    i+=1;
    console.log(info2[chaves]);
}
