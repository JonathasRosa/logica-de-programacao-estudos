function criarData(dia, mes, ano) {
    return {
     dia: dia,
     mes: mes,
     ano: ano,
        exibir: function () {
            return `${this.dia}/${this.mes}/${this.ano}`;
        },
    };
}

const d1 = criarData(9, 10, 2010);
const d2 = criarData(15, 8, 2014);
const d3 = criarData(26, 6, 2019);
console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
