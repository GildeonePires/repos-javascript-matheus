function countVowels(str) {
  let lowerStr = str.toLowerCase();
  let convertArray = lowerStr.split("");
  let cont = 0;
  for (let i = 0; i < convertArray.length; i++) {
    if (
      convertArray[i] === "a" ||
      convertArray[i] === "e" ||
      convertArray[i] === "i" ||
      convertArray[i] === "o" ||
      convertArray[i] === "u"
    ) {
      cont++;
    }
  }
  return cont;
}

console.log(countVowels("Aildeone Pires de Paula"));
