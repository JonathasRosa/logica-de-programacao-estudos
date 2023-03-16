let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = "#1 (AND) - Vai para o shopping?"
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "#2 (OR) - Vai para o shopping?"
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true != true);//OU-OR exclusivo (^ - !=)
console.log(true != false);
console.log(false != true);
console.log(false != false);
console.log(true !== true);//Estritamente diferente (!==)
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log("Não verdadeiro: " + !true);//OPERADOR UNÁRIO
console.log("Não falso: " + !false);