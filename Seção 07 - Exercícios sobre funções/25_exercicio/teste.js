function calculateAverage(num) {
  let media = 0;
  for (let i = 0; i < num.length; i++) {
    media += num[i];
  }
  return media / num.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5, 6]));
