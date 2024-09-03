function retornaNumAbsoluto(num){
    if(num < 0){
        return Math.abs(num);
    }else{
        return num;
    }
}

console.log(retornaNumAbsoluto(-10));
console.log(retornaNumAbsoluto(205));
console.log(retornaNumAbsoluto(-98));
console.log(retornaNumAbsoluto(-77));
console.log(retornaNumAbsoluto(66));
console.log(retornaNumAbsoluto(-2));