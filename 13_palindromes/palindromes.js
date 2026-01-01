const palindromes = function (word) {
    const arr = word //makes word lowercase then splits each letter into an array.
        .toLowerCase()
        .split('')
    const lettersOnlyArr = arr.filter(element => {  //filters only a-z and 0-9
        return element.match(/[a-z0-9]/);
    });
    const lettersOnly = lettersOnlyArr.join(""); //turns lettersOnlyArr into a string
    const reverseLetters = lettersOnlyArr  //reverses letterOnlyArr then turns reverse into a string
        .reverse()
        .join("");
    if (lettersOnly === reverseLetters) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
