/* Mapa de notas.
A+ = 10
A = 9
B+ = 8
B = 7
C+ = 6
C = 5
D+ = 4
D = 3
E+ = 2
E = 1
F = 0
*/

let nota = 7.9;

switch (Math.ceil(nota)) {
  default:
    console.log("Nota inválida!"); break;
  case 10: console.log("Excelente você tirou um A+!"); break;
  case 9: console.log("Parabéns você tirou um A!"); break;
  case 8: console.log("Parabéns você tirou um B+!"); break;
  case 7: console.log("Muito bom você tirou um B!"); break;
  case 6: console.log( "Não está ruim, mas também não está bom, você precisa se esforçar mais. Tirou um C+."); break;
  case 5: console.log("Infelizmente você tirou um C e está recuperação"); break;
  case 4: console.log("Infelizmente você tirou um D+ e está recuperação"); break;
  case 3: console.log("Infelizmente você tirou um D e está recuperação"); break;
  case 2: console.log("Infelizmente você tirou um E+ e está recuperação"); break;
  case 1: console.log("Infelizmente você tirou um E e está reprovado"); break;
  case 0: console.log("Infelizmente você tirou um F e está reprovado");
}