const module = {exports: {}};
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

})(module);

/* The "counter" variable inside the function cannot be accessed from outside the function using counter.counter, 
because the "counter" variable inside the function will be discarded after the function is called.*/

counter.increment();
console.log(counter.getCurrentCount()); // 1

counter.increment();
console.log(counter.getCurrentCount()); // 2

counter.increment();
console.log(counter.getCurrentCount()); // 3