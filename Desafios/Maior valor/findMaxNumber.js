function findMaxNumber(arr) {
  return Math.max(...arr);
}

console.log(findMaxNumber([1, 25, 35, 87, 12, 25, 24]));

function findMaxNumber2(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMaxNumber2([1, 25, 35, 80, 12, 25, 24]));
