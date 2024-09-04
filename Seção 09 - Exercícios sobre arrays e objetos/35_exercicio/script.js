let calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

console.log(calculadora.somar(9, 1));
console.log(calculadora.subtrair(8, 23));
console.log(calculadora.multiplicar(9, 2));
console.log(calculadora.dividir(9, 3));
