const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = '';
for (let nota of notas) {// OF acessa os valores
    valores += nota + '';
}
console.log(valores);

let indices = '';
for (let indice in notas) {//IN acessa os indices
    indices += indice + '';
}
console.log(indices);

