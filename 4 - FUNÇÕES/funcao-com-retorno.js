//forma 1
function sempreRetornaUm() {
  return 1;
}
//Forma 2 
function textoOuNumero(retornaTexto) {
  if (retornaTexto) {
    return "Sou um texto!";
  } else {
    return 123;
  }
}
//Forma 3
function textoOuNumero(retornaTexto) {
  return retornaTexto ? "Sou um texto!" : 123;
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);
console.log(textoOuNumero(false));