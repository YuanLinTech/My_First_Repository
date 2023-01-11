const module = {exports:{}};

let counter = 0;
console.log(module.exports === exports);
console.log(this === exports);
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

// exports.increment = increment;
// exports.getCurrentCount = getCurrentCount;
// this points to exports