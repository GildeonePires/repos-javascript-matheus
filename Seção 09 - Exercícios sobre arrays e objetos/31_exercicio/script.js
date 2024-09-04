let nomes = ["A", "B", "DD", "E", "II", "RRF", "GHJ"];

let numbers = [1, 25, 87];

function verificaElementos(array) {
  if (array.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

verificaElementos(nomes); //muitos elementos
verificaElementos(numbers); // poucos elementos