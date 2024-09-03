function sumEvenNumbers(arr) {
  let somaPares = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      somaPares += arr[i];
    }
  }
  return somaPares;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -12, 13, -18, -23]));
