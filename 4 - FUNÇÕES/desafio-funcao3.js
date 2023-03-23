const nota1 = 5.8;
const nota2 = 3.1;
const nota3 = 2.8;
const media = (nota1 + nota2 + nota3) / 3;

function resultadoFinal (media) {
    if (media >= 7) {
        return 'Aprovado';
    } else if(media >= 4){
    return 'Recuperação';
    } else {
        return 'Reprovado';
    };
}

resultadoFinal(media);
console.log(resultadoFinal(media));