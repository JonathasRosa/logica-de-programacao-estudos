const nascimento1 = {
  dia: "6",
  mes: "Fevereiro",
  ano: "2023",
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};


const nascimento2 = {
  dia: "15",
  mes: "Abil",
  ano: "2022",
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};


const nascimento3 = {
  dia: "9",
  mes: "Junho",
  ano: "2021",
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};
console.log(nascimento1.exibir());
console.log(nascimento2.exibir());
console.log(nascimento3.exibir());
