let velocidadeCarro = 116;

if (velocidadeCarro > 80) {
  console.log("Veículo foi multado - está acima da velocidade permitida!");
  console.log(
    `O veículo passou ${velocidadeCarro - 80} km/h acima da velocidade permitida.`
  );
} else {
  console.log("Veículo não foi multado - está dentro da velocidade permitida!");
}
