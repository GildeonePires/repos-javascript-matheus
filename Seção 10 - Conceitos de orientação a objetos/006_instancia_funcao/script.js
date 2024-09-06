function criaCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = function () {
    console.log("Au au");
  };
  return cachorro;
}

let dorberman = criaCachorro("Dorberman", 4, "preta");
console.log(dorberman);
dorberman.latir();
