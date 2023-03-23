/*
JavaScript: Currying
Currying é o processo de 
transformar uma função 
que espera vários argumentos 
em uma função que espera 
um único argumento e retorna 
outra função curried.
*/
function somar1(a, b) {
    return a + b
}
console.log(somar1(4,5));

function somar2(a) {
    return function (b) {
        return a + b;
    }
}
console.log(somar2(3)(5));

const somarMais10 = somar2(10);
console.log(somarMais10(5));
console.log(somarMais10(10));