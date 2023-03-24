const numeros = [10, 20, 30];

function paraCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
};
numeros.forEach(paraCadaElemento);

/*
for (let n of numeros) {//Percorre os elementos do array.
    console.log(n);
}
*/

/* 
for (let i = 0; i< numeros.length; i++){
    console.log(numeros[i]);
} 
*/