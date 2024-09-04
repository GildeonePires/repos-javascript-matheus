function sumUniqueNumbers(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === num) {
        count++;
      }
    }
    if (count === 1) {
      soma += num;
    }
  }
  return soma;
}

console.log(sumUniqueNumbers([1, 2, 3, 2, -1, 4, 3, 5, -1]));
