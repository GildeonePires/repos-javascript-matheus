let pessoa = {
    nome: 'Gildeone',
    idade: 29,
    profissao: "Programador",
}

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);

pessoa.casado = false;

console.log(pessoa);