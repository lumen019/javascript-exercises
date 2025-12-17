const repeatString = function(string, num) {
    let array = [];
    for (let i = 0; i < num; i++){
       array[i] = string;
    }
    return array.join("");
};

// Do not edit below this line
module.exports = repeatString;
