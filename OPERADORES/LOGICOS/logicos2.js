const t1 = true;//trabalho1
const t2 = true;//trabalho2

let comprarTV50 = t1 && t2;//AND
console.log('Vamos comprar a TV de 50"?', comprarTV50);
let comprarTV32 = t1 !== t2;//XOR
console.log('Vamos comprar a TV de 32"?', comprarTV32);
let tomarSorvete = t1 || t2;//OR
console.log('Vamos comprar sorvete?', tomarSorvete);
let ficarEmCasa = !tomarSorvete;//NOT
console.log('Vamos ficar em casa?', ficarEmCasa);