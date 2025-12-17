const repeatString = function(string, num) {
    let array = [];
    if (num >=0) {
        for (let i = 0; i < num; i++){
            array[i] = string;
         }
    return array.join("");
    } else if (num < 0){
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
