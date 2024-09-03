function decrementa(num) {
  for (let i = num; i >= 0; i--) {
    if (num % 2 == 0) {
      console.log(num);
      num--;
    } else {
      num--;
    }
  }
}

decrementa(10);
decrementa(883);
decrementa(24);
