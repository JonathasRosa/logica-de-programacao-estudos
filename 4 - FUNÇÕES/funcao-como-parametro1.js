function executar(funcao) {
    //VALIDAÇÃO
    if (typeof funcao === "function") {
        console.log(funcao());
    }
}
function bomDia() {
    return 'Bom Dia!'
}
executar(bomDia);

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);