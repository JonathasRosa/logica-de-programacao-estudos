const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros[0] = 0;
numeros.push(11);//Metodo push adiciona elementos ao array

console.log(numeros);
numeros.join(' - ');//junta todos os elementos do array a partir do símbolo determinado.
console.log(numeros.join(" - "));
const numeros2 = numeros.concat(12, 13, 14, 15);//Concatena
console.log(numeros2);
console.log(numeros.includes(10));//Boolean (verdadeiro||falso) do numero dentro do array
console.log(numeros.indexOf(4));//Qual é o index do elemento 4 no array
console.log(numeros.splice(6));//Elimina a quantidade de elementos especificado dentro do array.
console.log(numeros.pop());//Elimina o último elemento do array.