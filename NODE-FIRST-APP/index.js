console.log(module.exports === exports); // true
console.log(this === exports); // true

let counter = 0;

function increment(){
    counter++;
}

function getCurrentCount(){
    return counter;
}

module.exports = {
    increment,
    getCurrentCount,
};

/* Equivalent to 
exports.increment = increment;
exports.getCurrentCount = getCurrentCount; */

// By default, module.exports === exports
// In node.js, this points to exports