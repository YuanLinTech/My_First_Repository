console.log("Hello");
const myTimeout = setTimeout(function(){console.log("Apple")}, 5000); // Will not execute because timeout cleared after 3s before the timeout occurs
console.log("JavaScript rules");

function myStopFunction() {
    clearTimeout(myTimeout);
}

setTimeout(myStopFunction, 3000);