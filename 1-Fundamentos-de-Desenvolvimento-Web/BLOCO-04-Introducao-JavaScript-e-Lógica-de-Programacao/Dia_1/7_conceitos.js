/*Retorna o conceito da nota mediante seu valor*/

let nota = 90;
if (nota>100 || nota < 0)
{
    console.log("Erro! Inisira uma nota válida");
}

else if(nota>90){
    console.log('A');
}
else if (nota >= 80) {
    console.log("B");

} 
else if (nota >= 70) {
    console.log("C");
} 
  else if (nota>= 60) {
    console.log("D");
} 
else if (nota >= 50) {
    console.log("E");
} 
else {
    console.log("F");
  }