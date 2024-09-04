function removeDuplicates2(arr2) {
  let arrayUnicos2 = [];

  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];
    let count = 0;

    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === num) {
        count++;
      }
    }
    if (count === 1) {
      arrayUnicos2.push(arr2[i]);
    }
  }
  return arrayUnicos2;
}
console.log(removeDuplicates2([1, 2, 3, 2, -1, 4, 3, 5, -1]));
/***************************************************************** */

function removeDuplicates(arr) {
  let uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];


    if (uniqueElements.indexOf(element) === -1) {
      uniqueElements.push(element);
    }
  }

  return uniqueElements;
}

console.log(removeDuplicates([1, 2, 3, 2, -1, 4, 3, 5, -1]));
