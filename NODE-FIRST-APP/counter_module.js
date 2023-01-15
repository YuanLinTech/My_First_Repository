const moduleA = {exports: {}};
(function(module){// module pattern
    // Return is no longer needed after passing a module
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

})(moduleA);

/* The "counter" variable inside the function cannot be accessed from outside the function using counter.counter, 
because the "counter" variable inside the function will be discarded after the function is called.*/

moduleA.exports.increment();
console.log(moduleA.exports.getCurrentCount()); // 1

moduleA.exports.increment();
console.log(moduleA.exports.getCurrentCount()); // 2

moduleA.exports.increment();
console.log(moduleA.exports.getCurrentCount()); // 3