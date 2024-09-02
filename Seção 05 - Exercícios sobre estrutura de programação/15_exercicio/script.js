// let numeros = 41;

// for (let i = 1; i <= numeros; i++) {
//   let primo = 0;


//   for (let j = 1; j <= numeros; j++) {
//     if (i % j == 0) {
//       primo++;
//     }
//   }


//   if (primo === 2) {
//     console.log(i);
//   }
// }


let num = 9;
let divisoes = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log(`O número ${num} é primo`);
} else {
  console.log(`O número ${num} não é primo`);
}
