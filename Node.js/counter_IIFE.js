/*
 If we have some initiation code that we don't need to use again, we could use the IIFE pattern. 
 As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

*/
// IIFE (Immediately Invoked Function Expression)
const counter = (function(){
    let counter = 0; // This variable is private and cannot be accessed from outside the function
    function increment(){
        counter++;
    }
    function getCurrentCount(){
        return counter;
    }
    return{increment, getCurrentCount};

})();

/* The "counter" variable inside the function cannot be accessed from outside the function using counter.counter, 
because the "counter" variable inside the function will be discarded after the function is called.*/

counter.increment();
console.log(counter.getCurrentCount()); // 1

counter.increment();
console.log(counter.getCurrentCount()); // 2

counter.increment();
console.log(counter.getCurrentCount()); // 3