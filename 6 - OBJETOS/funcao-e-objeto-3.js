//Função construtora (Classe) -> Objeto
function Data(dia =1, mes = 1, ano=1) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
const d1 = new Data();
d1.ano = 1970;
d1.mes = 12;
const d2 = new Data(31, 07, 2022);
const d3 = new Data(8,5,2022);

console.log(typeof d1);
console.log(d1);
console.log(d2);
console.log(d3);