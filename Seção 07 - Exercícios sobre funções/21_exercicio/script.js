function tipoDado(dado) {

  if (typeof dado === "string") {
    console.log("É uma String");
  } else if (typeof dado === "boolean") {
    console.log("É uma Boolean");
  } else if (typeof dado === "number") {
    console.log("É uma Number");
  }
}

tipoDado("Gildeone");
tipoDado(false);
tipoDado(21);
