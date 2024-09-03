function reverseString(str) {
  let separaChar = str.split("");
  let invertiPosicoes = separaChar.reverse();
  let novaString = invertiPosicoes.join("");
  return novaString
}

reverseString("teste");
