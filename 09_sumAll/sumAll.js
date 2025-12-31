const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0){
        return "ERROR"
    }

    let arr = [];
    if (a < b) {
        for (let i = a; i <= b; i++){
            arr.push(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--){
            arr.push(i);
        }
    }
    return arr.reduce((sum, current) => sum + current, 0);

};


// Do not edit below this line
module.exports = sumAll;
