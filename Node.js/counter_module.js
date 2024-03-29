const moduleA = {exports: {}};
(function(module){// module pattern
    // Return is no longer needed after passing a module
    let counter = 0;

    // This method is private and cannot be exported
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

// Every JavaScript file will be converted into a module when it is run in Node.js

// console.log(global);
// console.log(module); // "module" is a Node.js built-in variable
// console.log(__dirname); // C:\Users\yuanl\Documents\GitHub\My_First_Repository\NODE-FIRST-APP
// console.log(__filename); // C:\Users\yuanl\Documents\GitHub\My_First_Repository\NODE-FIRST-APP\counter_module.js