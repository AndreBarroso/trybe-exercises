/*Exercício 1 */

let n = 5;

let recebeAsterisco;
 
for(let i=0; i<n; i+=1){
    if(i===0) {
        recebeAsterisco = '*';
    }
    else {
        recebeAsterisco+= '*';
    }
}
 
for(let j=0; j<n; j+=1){
    console.log(recebeAsterisco);
}

console.log(); /*Saltar linha*/
console.log(); /*Saltar linha*/

/*Exercício 2 */
for(i=0; i<n; i+=1){
    if(i===0) {
        recebeAsterisco = '*';
        console.log(recebeAsterisco);
    }
    else {
        recebeAsterisco+= '*';
        console.log(recebeAsterisco);
    }
}
console.log(' ')
/*Exercício 3 */
var k=0;
var j=0;
var recebeAsterisco2;
for(k=0; k<n; k+=1){
    var l=n-k-1;
    for(var j=0; j<l; j+=1){
        if(j===0){
            recebeAsterisco2=' ';
        }
        else{
            recebeAsterisco2+=' ';
        }
    }
    var t = k+1;
    if(t<n){
        for(var j=0; j<t; j+=1){
            recebeAsterisco2+='*';
        }
    }
    else{
        recebeAsterisco2='';
        for(var j=0; j<t; j+=1){
                recebeAsterisco2+='*';
            }
    }
    
    console.log(recebeAsterisco2);
}
console.log(' ');

/*Exercício 4 */

let div;
let triangulo;
let centro='*';
let pontaE='x';
l=1;

for(let i=n; i>0; i-=1){
    div=(i/2)+0.5;
    if(l%2!==0||i%2!==0){
        for(j=1;j<div;j+=1){
            if(j===1.0){
                    pontaE=' ';
            }
            else{
                pontaE+=' ';
            }
           
        }
       
       
        
        for(let k=1;k<=l;k++){
            if(k===1){
                centro='*';
            }
            else{
                centro+='*';
            }
        }
        if (i===1){
            console.log(centro);
        }
        else{
            console.log(pontaE+centro+pontaE);
        }
    }
    l+=1;
}


