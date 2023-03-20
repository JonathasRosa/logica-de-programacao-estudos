const hora = 19;
let saudacao;

if (hora < 12) {
  saudacao = "Bom dia";
} else if (hora < 18) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}
console.log(saudacao);
 /*
if (hora < 12) { (o que estiver dentro das chaves é um bloco de código)
  saudacao = "Bom dia"; (Sentença de código)
} else {
 */