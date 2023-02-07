console.log("Hello");
const myTimeout = setTimeout(function(){console.log("Apple")}, 5000);
console.log("JavaScript rules");

function myStopFunction() {
    clearTimeout(myTimeout);
}

setTimeout(myStopFunction,3000);