const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const semPares = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    semPares.push(arr[i]);
  }
}
console.log(semPares);

function classificarNumero(numInteiro) {
  if (numInteiro === 0) {
    return "Neutro";
  } else if (numInteiro < 0) {
    return "Negativo";
  } else if (numInteiro > 0 && numInteiro % 2 === 0) {
    return "Positivo e Par";
  } else if (numInteiro > 0 && numInteiro % 2 !== 0) {
    return "Positivo e Impar";
  }
}
console.log(classificarNumero(18));
console.log(classificarNumero(1));
console.log(classificarNumero(-1));
console.log(classificarNumero(0));
