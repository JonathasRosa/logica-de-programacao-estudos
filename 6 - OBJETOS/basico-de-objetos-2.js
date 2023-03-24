// Objeto - produto tem 3 atributos ou propriedades: nome, preço e desconto
//Uma função dentro de um objeto é um método.
//this é a palavra reservada que serve para a partir do objeto referênciar a si mesmo.

const produto = {
    nome: 'Ipad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function () {
        return this.preco * (1 - this.desconto);
    }
}

console.log(produto.precoComDesconto());
