const readline = require('readline-sync');


function seqFibonacci() {
  const n = readline.questionInt('Digite quantos números da sequência deseja ver: ');
  let n1 = 0;
  let n2 = 1;
  let n3;
  if(n===0){
    const question = readline.question(
      `Tem certeza que não deseja ver nenhum número? Digite:
      1 - s para sair
      2 - Qualquer outro valor para recomeçar `
    );
    if(question=='s'|| question=='S' ) {
      return;
    }
    else {
      seqFibonacci()
    }
  }
  if(n===1) return console.log(n1);
  if(n===2) {
    console.log(n1);
    console.log(n2);
    return
  }
  console.log(n1);
  console.log(n2);
  for(let i=0; i< n-2; i+=1) {
    n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
  }
}

seqFibonacci();
