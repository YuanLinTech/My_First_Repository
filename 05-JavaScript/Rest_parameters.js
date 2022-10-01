// This function accepts any number of string arguments and returns the longest one.
function longestString(...StringArgs) {
    let longest = '';
    for (let i = 0; i < StringArgs.length; i++) {
        if (StringArgs[i].length > longest.length) {
            longest = StringArgs[i];
        }
    }
    return longest;
}

console.log(longestString("integrity", "decency", "authenticity")) // expected output: authenticity

// The function above is equivalent to
function longestString1() {
    let longest = '';
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}

console.log(longestString1("integrity", "decency", "authenticity")) // expected output: authenticity
console.log(typeof arguments); // expected output: object
console.log(typeof arguments[0]); // expected output: object

// This function accepts any number of numbers as arguments and calculate and return its sum
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x); // expected output: 326

function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // expected output: [30, 50, 84]