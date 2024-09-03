function isPalindrome(palavra){
    let lowCase = palavra.toLowerCase();
    let convertEmArray = lowCase.split('');
    let inverteArray = convertEmArray.reverse();
    let novaPalavra = inverteArray.join('');

    if(lowCase == novaPalavra){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("hello"));