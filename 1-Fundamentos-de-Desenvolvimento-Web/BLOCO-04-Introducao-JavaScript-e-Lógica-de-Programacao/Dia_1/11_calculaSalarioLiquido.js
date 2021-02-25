/*Programa que calcula o salário líquido*/
let salario = 3000;
let impostoINSS;
let aliquotoIR;
let salarioBase;
let salarioLiquido;


if(salario<=1556.94){
    impostoINSS = salario*0.08;
}

else if(salario>1556.94 && salario<=2592.92){
    impostoINSS = salario*0.09;
}

else if(salario>2592.92 && salario<=5189.82){
    impostoINSS = salario*0.11;
}

else {
    impostoINSS = 570.88
}

salarioBase = salario - impostoINSS;

console.log('Salario Base:',salarioBase);




if(salarioBase<=1903.98){
aliquotoIR = 0;
}

else if(salarioBase>1093.98 && salarioBase<=2826.65){
    aliquotoIR = salarioBase * 0.075 - 142.8;
}

else if(salarioBase>2826.65 && salarioBase<=3751.05){
    aliquotoIR = salarioBase * 0.15 - 354.8;
}

else if(salarioBase>3751.05 && salarioBase<=4664.68){
    aliquotoIR = salarioBase * 0.225 + 636.13;
}

else{
    aliquotoIR = salarioBase * 0.275 + 869.36;
}

console.log('Aliquota', aliquotoIR);

salarioLiquido = salarioBase -  aliquotoIR;

console.log(salarioLiquido);