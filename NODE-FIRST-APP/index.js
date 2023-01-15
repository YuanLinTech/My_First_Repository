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