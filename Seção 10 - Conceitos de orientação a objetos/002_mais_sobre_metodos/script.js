const cachorro = {
  raca: "SRD",
  uivar: function () {
    console.log("Auuuuuuuuu");
  },
  rosnar: function () {
    console.log("grrrrrrrrrrrr");
  },
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return "A raça é " + this.raca;
  },
};

console.log(cachorro.raca);
cachorro.setRaca("Vira-Lata");
console.log(cachorro.getRaca());;
