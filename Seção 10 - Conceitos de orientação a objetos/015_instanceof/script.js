class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);

console.log(coiote);

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }

  latir() {
    console.log("Au au");
  }
}

let pug = new Cachorro(4, "Pug");

console.log(pug.patas);
pug.latir();
console.log(pug);

console.log(new Cachorro() instanceof Mamifero);
console.log(coiote instanceof Mamifero);
