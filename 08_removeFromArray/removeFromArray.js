const removeFromArray = function(arr, ...numToRemove) {
    return arr.filter(element => !numToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
