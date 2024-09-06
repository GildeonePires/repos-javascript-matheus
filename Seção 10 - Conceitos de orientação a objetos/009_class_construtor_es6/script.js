class Cachorro {
  constructor(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  }
}

let labrador = new Cachorro("Labrador", 4, "Amarelo");
console.log(labrador);

class Pessoa {
  constructor(nome, sobrenome, idade, formacao) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.formacao = formacao;
  }
}

let pessoa = new Pessoa("Gildeone Pires", "de Paula", 32, "Nível superior");
console.log(pessoa);
console.log(
  `Eu sou ${pessoa.nome} ${pessoa.sobrenome} sou tenho grau de escolaridade - ${pessoa.formacao} e tenho ${pessoa.idade} anos.`
);
