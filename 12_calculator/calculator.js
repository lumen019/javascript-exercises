const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0; 
  arr.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = function(arr) {
  let product =1;
  for (let i=0; i < arr.length; i++){
    product = product * arr[i];
  }
  return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
	let total = 1;
  for (let i=num; i > 0; i--){
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
