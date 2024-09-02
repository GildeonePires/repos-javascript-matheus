function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));
const mult = multiplicarTresNumeros(5, 4, 8);

console.log("O valor de mult é " + mult);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

podeDirigir(19, true);
podeDirigir(25, true);
podeDirigir(44, 0);
podeDirigir(19, 1);
podeDirigir(17, false);
