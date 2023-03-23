function resultado (nota) {
    switch (Math.ceil(nota)) {
        case 10: return "Sua nota foi A+!";
        case 9: return "Sua nota foi A";
        case 8: return "Sua nota foi B+";
        case 7: return "Sua nota foi B";
        case 6: return "Sua nota foi C+";
        case 5: return "Sua nota foi C";
        case 4: return "Sua nota foi D+";
        case 3: return "Sua nota foi D";
        case 2: return "Sua nota foi E+"
        case 1: return "Sua nota foi E";
        case 0: return "Sua nota foi F";
        default: return null;
  }
}
console.log(`${resultado(2)}`)
