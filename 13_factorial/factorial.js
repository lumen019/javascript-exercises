const factorial = function(n) {
    if(n === 0 || n === 1){
        return 1;
    } else if (Number.isInteger(n) && n > 0){
        return n * factorial(n - 1)
    } else {
        return undefined;
    }
};

// Do not edit below this line
module.exports = factorial;