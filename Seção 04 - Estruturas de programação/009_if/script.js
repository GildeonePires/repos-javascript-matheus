let idade = 19;

if (idade == 19) {
  console.log("A idade é igual a 19");
}

if (idade > 25) {
  console.log("A idade é maior que 25");
}

let nome = "Matheus";
if (nome == "Matheus" && idade > 10) {
  console.log("Liberado um!");
}

let passaporte = true;
if ((nome == "Matheus" && idade > 30) || passaporte == true) {
  console.log("Liberado dois!");
}
