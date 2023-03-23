// #1: Função COM parâmetros e COM retorno
function somar(a, b) {
    return a + b;
}
let resultado = somar(30, 57);
console.log(`O resultado final é ${resultado}`);
console.log(`O resultado final é ${somar(30, 57)}`);
// #2: Função COM parâmetro e SEM retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}
exibirMultiplicacao(10,21);
exibirMultiplicacao(7, 9);
// #3: Função SEM parâmetros e COM retorno
function retornarDataAtual() {
    return new Date();
}
console.log(retornarDataAtual());
// #4: Função SEM parâmetros e SEM retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}
exibirHoraAtual();