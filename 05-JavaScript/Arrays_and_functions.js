var names = ['Jing', 'Emily', 'Holly', 'Jack'];

// push and pop adds or removes the last element
names.push('Tom'); // Add the element 'Tom' to the back of the array
console.log(names); // Expected output: [ 'Jing', 'Emily', 'Holly', 'Jack', 'Tom' ]
console.log(names.length); // Expected output: 5
console.log(names.pop()); // Remove the last element from the array and return the removed element. Expected output: Tom
console.log(names.length); // Expected output: 4

// unshift and shift adds or removes the first element
names.unshift('Tom'); // Add Tom to the beginning of the array.
console.log(names); // Expected output: [ 'Tom', 'Jing', 'Emily', 'Holly', 'Jack' ]
console.log(names.length); // Expected output: 5
console.log(names.shift()); // Remove the first element from the array and return the removed element. Expected output: Tom
console.log(names.length); // Expected output: 4
console.log(names); // Expected output: [ 'Jing', 'Emily', 'Holly', 'Jack']

names[2] = 'Tom';
console.log(names[2]); // Expected output: Tom
console.log(names); // Expected output: [ 'Jing', 'Emily', 'Tom', 'Jack' ]

names[101] = 'Mary';
console.log(names.length); // Expected output: 102
console.log(names[99]); // Elements with index 4 - 100 are undefined. Expected output: undefined

var twoDArray = [[1,2,3],[4,5,6],[7,8,9]];
console.log(twoDArray[1]); // Expected output: [4,5,6]
console.log(twoDArray[1][2]); // Expected output: 6

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice());
// expected output: ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2));
// expected output: ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2)); // Last two elements
// expected output: ["duck", "elephant"]

console.log(animals.slice(2, -1)); // Third element through to the second to last element
// expected output: ["camel", "duck"]

// Create the array "fruits" with 2 elements: 'Apple' and 'Banana'
const fruits1 = ['Apple', 'Banana'];

console.log(fruits1.length); // expected output: 2
console.log(fruits1[0]); // expected output: Apple

// Create the array "fruits" with 2 undefined elements.
const fruits2 = new Array(2);

console.log(fruits2.length); // expected output: 2
console.log(fruits2[0]); // expected output: undefined

// Create the array "fruits" with 2 elements: 'Apple' and 'Banana'
const fruits3 = new Array('Apple', 'Banana');

console.log(fruits3); // expected output: ['Apple', 'Banana']
console.log(fruits3.length); // expected output: 2
console.log(fruits3[0]); // expected output: Apple

// Create the array "fruits" with 2 elements: 'Apple' and 'Banana'
const fruits4 = Array('Apple', 'Banana');

console.log(fruits4); // expected output: ['Apple', 'Banana']
console.log(fruits4.length); // expected output: 2
console.log(fruits4[0]); // expected output: Apple

const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
console.log(cars); // expected output: ['Saab', 'Volvo', 'BMW']

// const cars = ["Saab", "Volvo", "BMW"]; // SyntaxError: Identifier 'cars' has already been declared
// let car = cars[0];

const cars1 = ["Saab", "Volvo", "BMW"];
let car1 = cars1[0];
console.log(car1); // expected output: Saab

const cars2 = ["Saab", "Volvo", "BMW"];
cars2[0] = "Opel";
console.log(cars2); // expected output: ['Opel', 'Volvo', 'BMW']

const Fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = Fruits[-1];
console.log(fruit); // undefined

// if (2 = x){ // Error: because 2 is not a legal variable name

// }

const arr = [1, 2];
console.log(arr); // Output: [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr); // Output: [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// Output: 
// 1
// 2

const myArr = new Array(2);
console.log(myArr.length); // Output: 2
console.log(myArr[0]);     // Output: undefined

function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1

    console.log(arguments[1]);
    // expected output: 2

    console.log(arguments[2]);
    // expected output: 3
}
func1(1, 2, 3); 
// expected output:
// 1
// 2
// 3

function myFunction(x, y, z) 
{ 
    return x+y+z;
}
const args1 = [1, 2, 3];
console.log(myFunction(...args1)); // expected output: 6

function sumFunc(v, w, x, y, z) 
{
    return v + w + x + y + z;
}

const args2 = [0, 1];
const args3 = [2, 3];
console.log(sumFunc(-1, ...args2, ...args3)); // expected output: 5

const myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
// const myCar = [...myHonda, 2, 'cherry condition', 'purchased 1997']; // TypeError: myHonda is not iterable
const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
console.log(myCar); 
/* Expected output: 
   [
     { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
      2,
      'cherry condition',
      'purchased 1997'
   ] */

const Arr = [1, 2, 3];
const obj = { ...Arr}; 
console.log(obj);// { '0': 1, '1': 2, '2': 3 }

var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements); // Equivalent to Array.prototype.push.apply(array, elements);
console.log(array); // [ 'a', 'b', 0, 1, 2 ]

var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push(...elements);
console.log(array); // [ 'a', 'b', 0, 1, 2 ]

console.log(Array.isArray(myHonda)); // false
console.log(Array.isArray(myCar));  // true
console.log(twoDArray instanceof Array); // true

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
arr1.unshift.apply(arr1, arr2); // Equivalent to Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // arr1 is now [3, 4, 5, 0, 1, 2]

const newCar = myCar.slice(0, 3);
console.log(newCar);
// Expected output:
//[
//{ color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
//2,
//    'cherry condition'
//]

// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("Hello world!");
})()

const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics); // expected output: ["head", "shoulders", "knees", "and", "toes"]

var age = 26;
if (age >= 21){
    var beverage = "Beer";
}
else{
    var beverage = "Beer";
}
console.log(beverage); // Expected output: "Beer"

// The following statements are equivalent to the if-else statement written above
beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // Expected output: "Beer"

var age = 18;

if (age < 18) 
{
    console.log('You are under 18.');
}
else 
{ // else always matches its nearest if
    console.log('You are over 18.');
}

// The following statement is equivalent to the if-else statement written above
console.log(age < 18 ? 'You are under 18.' : 'You are over 18.');

// Var = condition ? exprIfTrue : exprIfFalse is equivalent to 
// if (condition){
//     Var = exprIfTrue;
// }
// else{
//     Var = exprIfFalse;
// }

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

// Function expression

// var FirstTenExpression = function firstTen(param1, param2, param3) {
//     const res = [];
//     for (var i = 0; i <= param3; i++) {
//         if (res.length == 10) {
//             return res;
//         }

//         if ((i % param1 === 0) && (i % param2 !== 0)) {
//             res.push(i);
//         }
//     }
// }

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

const ages = [3, 10, 18, 20];
function checkAge(age) {
    return age > 18;
}
console.log(ages.findIndex(checkAge)); // Expected output: 3

const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple", "Lemon", "Apple"];
var index = fruits.indexOf("Apple");
console.log(index); // Expected output: 2

// Start the search from index 3
index = fruits.indexOf("Apple", 3); 
console.log(index); // Expected output: 4

// Start the search from the end of the array
index = fruits.indexOf("Apple", -1); 
console.log(index); // Expected output: 6

// Start the search at the third last position
index = fruits.indexOf("Apple", -3);
console.log(index); // Expected output: 4

const MoreFruits = ["Banana", "Orange", "Apple", "Mango", "Apple", "Lemon", "Apple"];
var index = MoreFruits.lastIndexOf("Apple");
console.log(index); // Expected output: 6

// Start the search from index 3
index = MoreFruits.lastIndexOf("Apple", 3);
console.log(index); // Expected output: 2

// Start the search from the end of the array
index = MoreFruits.lastIndexOf("Apple", -1); 
console.log(index); // Expected output: 6

// Start the search at the second last position
index = MoreFruits.lastIndexOf("Apple", -2); // Start the search from the end of the array
console.log(index); // Expected output: 4