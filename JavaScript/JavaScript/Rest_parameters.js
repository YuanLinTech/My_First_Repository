// This function accepts any number of string arguments and returns the longest one.
function longestString(...StringArgs) 
{
    let longest = '';
    for (let i = 0; i < StringArgs.length; i++) 
    {
        if (StringArgs[i].length > longest.length) 
        {
            longest = StringArgs[i];
        }
    }
    return longest;
}

console.log(longestString("integrity", "decency", "authenticity")) // Output: authenticity

// The longestString1() function is equivalent to longestString()
function longestString1() 
{
    let longest = '';
    for (let i = 0; i < arguments.length; i++) 
    {
        if (arguments[i].length > longest.length) 
        {
            longest = arguments[i];
        }
    }
    return longest;
}

console.log(longestString1("integrity", "decency", "authenticity")) // Output: authenticity
console.log(typeof arguments); // Output: object
console.log(typeof arguments[0]); // Output: object

// This function accepts any number of arguments, calculate and return their sum
function sumFunc1(...args) 
{
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sumFunc1(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x); // Output: 326

// The SumFunc2() function is equivalent to SumFunc1()
function sumFunc2() {
    let total = 0;
    for (const arg of arguments) {
        total += arg;
    }
    return total;
}

let y = sumFunc2(5,2,7,4);
console.log(y); // Output: 18

function multiply(multiplier, ...theArgs) 
{
    return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // Output: [30, 50, 84]

function sortRestArgs(...theArgs) 
{
    const sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // Output: [1, 3, 5, 7]

// Rest parameters are real arrays; the arguments object is not
function sortArguments() 
{
    // const sortedArgs = arguments.sort(); Throws a TypeError (arguments.sort is not a function)
    // To use Array methods on the arguments object, it must be converted to a real array first.
    const args = Array.from(arguments);
    const sortedArgs = args.sort();
    return sortedArgs; 
}

console.log(sortArguments(5, 3, 7, 1)); // Output: [1, 3, 5, 7]