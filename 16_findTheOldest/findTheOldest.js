// const people = [
//       {name: "Carly", yearOfBirth: 1942, yearOfDeath: 1970,},
//       {name: "Ray",  yearOfBirth: 1962, yearOfDeath: 2011,},
//       {name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941,},
//     ]



const findTheOldest = function(element) {
    element.sort((a,b) => {
        let lastGuy = (a.yearOfDeath ?? new Date().getFullYear())- a.yearOfBirth
        let nextGuy = (b.yearOfDeath ?? new Date().getFullYear()) - b.yearOfBirth
        return lastGuy > nextGuy ? -1: 1;
    })
    return element[0];
};
 
// Do not edit below this line
module.exports = findTheOldest;
