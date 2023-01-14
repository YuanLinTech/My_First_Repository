/*
 If we have some initiation code that we don't need to use again, we could use the IIFE pattern. 
 As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

*/
// IIFE (Immediately Invoked Function Expression)
const counter = (function(){
    let counter = 0;
    function increment(){
        counter++;
    }
    function getCurrentCount(){
        return counter;
    }
    return{increment, getCurrentCount};

})();

counter.increment();
console.log(counter.getCurrentCount());

counter.increment();
console.log(counter.getCurrentCount());

counter.increment();
console.log(counter.getCurrentCount());