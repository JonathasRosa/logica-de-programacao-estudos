let a = 1;
let b = 2;

/*A incrementação de a(++a = prefix)
tem mais prioridade nessa expressão,
em seguida o(===) depois a postfix(b++).
*/
console.log(++a === b++);
console.log(a === b);
/* 
a/b =  operandos;
(+/-) operadores;
a(+)b = infix;
a(++) = postfix;
(++)a = prefix;
*/