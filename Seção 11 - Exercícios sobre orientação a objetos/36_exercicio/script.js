class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(deposito) {
    return (this.saldo += deposito);
  }

  saque(saque) {
    return (this.saldo -= saque);
  }
}

let conta = new Conta(100);
console.log(`Meu saldo é de R$ ${conta.saldo} reais.`);

console.log(
  `Com o deposito meu novo saldo é de R$ ${conta.deposito(250)} reais.`
);

console.log(`Com o saque meu novo saldo é de R$ ${conta.saque(22)} reais.`);
