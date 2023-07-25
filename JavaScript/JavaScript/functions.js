// This example function accepts any number of string arguments and returns the longest one.
function longestString() {
    let longest = '';
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}

console.log(longestString("integrity", "decency", "authenticity")) // expected output: authenticity
console.log(typeof arguments); // expected output: object
console.log(typeof arguments[0]); // expected output: object

// The longestString function is equivalent to

function longestString1(...StringArgs) 
{
    let longest = '';
    for (let i = 0; i < StringArgs.length; i++) {
        if (StringArgs[i].length > longest.length) {
            longest = StringArgs[i];
        }
    }
    return longest;
}

console.log(longestString1("integrity", "decency", "authenticity")) // expected output: authenticity

for (let x = 0; x < 10; x++)
{
    console.log(x*x);
}

// console.log(x); // ReferenceError: x is not defined

var i = 0;

// Skip and not print number 8
while (i < 10)
{
    if (i === 8)
    {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

// Requirement: When j is 5, print out j and terminate the loop
var j = 0;
while (j < 10) 
{
    if (j === 5) 
    {
        console.log(j);
        break;
    }
    console.log(j);
    j++;
}

/* Find the first ten numbers between 0 and 100 that are multiples of 4 but not multiples of 5, 
and print out the numbers in an array. */
const res = [];
for (let i = 0; i <= 100; i++) 
{
    if (res.length == 10) {
        break;
    }

    if ((i % 4 === 0) && (i % 5 !== 0)) {
        res.push(i);
    }
}
console.log(res); // [4, 8, 12, 16, 24, 28, 32, 36, 44, 48]

/* A function that finds the first ten numbers between 0 and param3 that are multiples of param1 but not multiples of param2, 
and prints out the numbers in an array. */

// Function declaration
function firstTen(param1, param2, param3)
{
    const res = [];
    for (var i = 0; i <= param3; i++)
    {
        if(res.length == 10)
        {
            return res;
        }

        if ((i % param1 === 0) && (i % param2 !== 0)){
            res.push(i);
        }
    }
}

console.log(firstTen(4, 5, 100)); // [4, 8, 12, 16, 24, 28, 32, 36, 44, 48]
console.log(typeof(firstTen(4, 5, 100))); // Expected output: object

// Named function expression

var FirstTenExpression = function firstTen(param1, param2, param3) {
    const res = [];
    for (var i = 0; i <= param3; i++) {
        if (res.length == 10) {
            return res;
        }

        if ((i % param1 === 0) && (i % param2 !== 0)) {
            res.push(i);
        }
    }
}

console.log(FirstTenExpression(2,5,100)); // [2, 4, 6, 8, 12, 14, 16, 18, 22, 24]
console.log(firstTen(2,5,100)); // [2, 4, 6, 8, 12, 14, 16, 18, 22, 24]


// Anonymous function expression
var sum = function(num1, num2){
    return num1+num2;
}

// Use the variable "sum" as a function
console.log(sum(1,2)); // Expected output: 3

// Anonymous function expression
const x = function(a, b) {return a * b;}
console.log(typeof x); /* Output: function
Although functions are in fact objects, typeof() will return function for the type of a function. */
// Use the variable z as a function
let z = x(4, 3);
console.log(z); // Expected output: 12

// Named function expression
const myFunc = function square(num){
    return num*num;
}
console.log(typeof myFunc); // EXpected output: function
// Functions can be used as variables.
// Add the values of num1 and num2, multiply the sum by 2, and return the result.
function firstSumthenDouble(sumFunc, num1, num2){
    const result = sumFunc(num1, num2);
    return result*2;
}

console.log(firstSumthenDouble(sum, 2, 3)); // Expected output: 10

var PersonObject = {
    PersonName: 'Jing',
    Age: 18
}

var Jing = PersonObject; // Copy the addr of aString to anotherString
PersonObject.Age = 19;
console.log(Jing.Age); // 19

var aString = 'know'; // Pass by value
var anotherString = aString; // Copy the value of aString to anotherString

aString = 'unknown';
console.log(aString); // Expected output: unknown
console.log(anotherString); // Expected output: know

var man = {
    name: 'Jing',
    age: 18,
    occupation: 'dev'
}

// Objects used as function parameters are passed by reference
function UpdateAge(person){
    // Increment a person's age by one
    person.age++;
}

UpdateAge(man);
console.log(man); // Expected output: { name: 'Jing', age: 19, occupation: 'dev' }

function increaseAgeByOne(person){ // Does not change the items of "person".

    var myPerson = {
        name: person.name,
        age: person.age+1
    }
    return myPerson;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

FullName = person.fullName();
console.log(FullName); // Output: John Doe
// Access the function definition

console.log(person.fullName); // Output: [Function: fullName]

console.log(increaseAgeByOne(man)); // Expected output: { name: 'Jing', age: 20 }
console.log(man); // Expected output: { name: 'Jing', age: 19, occupation: 'dev' }

// Primitive values used as function parameters are passed by reference
function plus1(i) {
    i++;
}

console.log(plus1(1)); // Expected output: undefined The return value of function "plus1" is not defined, therefore it returns the value "undefined".

var t = 1;
plus1(t);
console.log(t); // Expected output: 1

for (var p in man){
    console.log(p+' '+man[p]);
}

// Output:
// name Jing
// age 19
// occupation dev
