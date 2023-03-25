//Objeto data
//Atributos: dia, mes e ano
//Método: exibir ->"dia/mes/ano"

const nascimento = {
    dia: '6',
    mes: 'Fevereiro',
    ano: '2023',
    exibir: function() {
        return (`${this.dia}/${this.mes}/${this.ano}`)
    }
}
console.log(nascimento.exibir())