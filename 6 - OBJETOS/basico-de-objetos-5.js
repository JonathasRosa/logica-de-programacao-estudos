const cliente = {
  codigo: 123456,
  nome: "Ana",
  vip: true,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1248,
    complemento: "Apto 105 Bloco C",
    pontoRef: [
      { nome: "Hospital São Lucas", muitoProximo: true },
      { nome: "Atrás da Caixa D'agua", muitoProximo: false },
    ],
  },
  nomeFilhos: ["Bia", "Carlos", "Gabi"],
};
console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontoRef[0].muitoProximo);