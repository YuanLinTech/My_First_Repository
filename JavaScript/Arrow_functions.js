// Traditional Anonymous Function
var myFunc = function (a) {
    return a + 100;
};

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
var myFunc = (a) => {
    return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
var myFunc = (a) => a + 100;

// 3. Remove the argument parentheses
var myFunc = a => a + 100;

// Traditional Anonymous Function
var sum = function(num1,num2)
{
    return num1 + num2;
}

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
var sum = (num1, num2) => 
{
    return num1 + num2;
}

// 2. Remove the body braces and word "return" — the return is implied
var sum = (num1, num2) => num1 + num2; // Argument parentheses can only be omitted if there is only one argument

console.log(sum(1, 2)) // Output: 3

const a = 4;
const b = 2;

// Traditional Anonymous Function (no arguments)
var myFunc = function () {
    return a + b + 100;
};

// Arrow Function (no arguments)
var myFunc = () => a + b + 100;

console.log(myFunc()); // Output: 106

// Traditional Anonymous Function
var printSum = function(num1, num2)
{
    console.log(`Sum is ${num1 + num2}`);
    return num1 + num2;
}

// Arrow Function (function body consists of multiple lines)
// Body braces and return can only be omitted if the function body consists of only one line
var printSum = (num1, num2) => 
{
    console.log(`Sum is ${num1 + num2}`);
    return num1 + num2;
}

console.log(printSum(1,2)); /* Output: 
Sum is 3
3
*/

// Traditional Function
function bob(a) {
    return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;
console.log(bob2(1)); // Output: 101

const x = ([a, b] = [10, 20]) => a + b; /* Used destructuring assignment to assign a the default value of 10 and b the default value of 20. */
console.log(x()); // Output: 30

const y = ({ a, b } = { a: 10, b: 20 }) => a + b; /* Used destructuring assignment to assign a the default value of 10 and b the default value of 20. */
console.log(y()); // Output: 30

console.log(arguments);
console.log(arguments[0]); // arguments[0] in the global scope equals to {}

// Arrow functions do not have their own arguments object
const arr = (a) => 
{
    console.log(arguments[0]); // arguments[0] in the global scope equals to {}
    return arguments[0] + a;
}

console.log(arr(1)); /* Output: 
{}
[object Object]1
*/

function foo(n) 
{
    const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
    return f();
}

console.log(foo(3)); // Output: 6 (3 + 3 = 6)
console.log(arguments[0]); // arguments[0] in the global scope still equals to {}

var arguments = [1, 2, 3];
const arr1 = () => arguments[0];
console.log(arr1()); // 1

// Arrow functions do not have a prototype property.
const emptyArrowFunc = () => { };
console.log(emptyArrowFunc.prototype); // undefined
// const emptyArrowFunc = new emptyArrowFunc(); // TypeError: Foo is not a constructor

const fruitInventory = 
[
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
    { name: 'oranges', quantity: 3}
];

const result = fruitInventory.find(({name}) => name === 'cherries'); // Find the first occurrence of the fruit item with the name 'cherries'. Note the {} around "name".
// If you type const result = fruitInventory.find((name) => name === 'cherries'); then the result of console.log(result) would be undefined
// Equivalent to const result = fruitInventory.find((fruit) => fruit.name === 'cherries');
const emptyStock = fruitInventory.find((fruit) => fruit.quantity === 0); // Find the fruit occurrence of the fruit item with no stock. Note that there are no {} around "fruit".
console.log(result) // { name: 'cherries', quantity: 5 }
console.log(emptyStock); // { name: 'bananas', quantity: 0 }

// An empty arrow function returns undefined
const empty = () => { };
console.log(empty()); // Output: undefined

(() => 'foobar')();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => a > 15 ? 15 : a;
console.log(simple(16)); // Output: 15
console.log(simple(10)); // Output: 10

const max = (a, b) => a > b ? a : b;
console.log(max(1,2)); // Output: 2
console.log(max(101,100)); // Output: 101
console.log(max(5,5)); // Output: 5

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1); // expected output: [2, 8, 18, 32]
console.log(array1) // array1 is still [1, 4, 9, 16]

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots); // roots is now [1, 2, 3]
console.log(numbers); // numbers is still [1, 4, 9]

const kvArray = 
[
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray); // reformattedArray is now [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
console.log(kvArray); // kvArray is still [ { key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 } ]

const Numbers = [1, 2, 3, 4];
const filteredNumbers = Numbers.map((num, index) => 
{
    if (index < 3) {
        return num;
    }
});
console.log(filteredNumbers);// filteredNumbers is [1, 2, 3, undefined]
console.log(Numbers); // Numbers is still [1, 2, 3, 4]

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array

const numbers1 = [4, 2, 5, 1, 3];
numbers1.sort((a, b) => a - b);
console.log(numbers1); // [1, 2, 3, 4, 5]

function sortRestArgs(...theArgs) 
{
    const sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // [ 1, 3, 5, 7 ]

// To use Array methods on the arguments object, it must be converted to a real array first.
function sortArguments() 
{
    const args = Array.from(arguments); // Convert arguments to a real array
    const sortedArgs = args.sort();
    return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // [ 1, 3, 5, 7 ]

// Spread syntax
const num = ['one', 'two', 'three'];
const [red, ...rest] = num;
console.log(red); // Output: 'one'
console.log(rest); // Output: ['two', 'three']

const newNum = [...num, 'four'];
console.log(newNum); // Output: ['two', 'three', 'four']

/* When the entry containing the value two is reached, the first entry of the whole array is shifted off
— resulting in all remaining entries moving up one position. 
Because element 'four' is now at an earlier position in the array, 'three' will be skipped.
The forEach loop will proceed to the third element of the modified array, which is 'four'. */
const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
    console.log(word);
    if (word === 'two') {
        words.shift(); //'one' will delete from array
    }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']


// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]


// function Person(name)
// {
//     this.name = name;
// }

// Person.prototype.sayHi = function()
// {
//     console.log('My name is ' + this.name);
// }

// var fns = [];
// for (let i = 0; i < 10; i++)
// {
//     fns[i] = function()
//     {
//         console.log(i);
//     }
// }

// let i = 0;
// fns[i] = function () 
// {
//     console.log(i);
// }

// const s1 = "Hello 'world'";
// const s2 = "\"Hello\" 'world'";
// const s3 = `"Hello" 'world'`;
// const greeting = `Hello, my name is ${fullName}, ${age} years old`

// const sayHi = (
//     title = 'Dear',
//     name = 'customer',
//     message = 'welcome'
// ) => console.log(`${title} ${name}, ${message}`)

// const hello = (name = 'world') => {
//     if (!name){
//         name = 'world';
//     }
//     console.log(`Hello ${name}`);
// }

// hello(); // Hello world
// hello('Alice'); // Hello Alice

// let student = 
// {
//     Name: 'Alice',
//     Age: 26,
//     Courses: ['Introduction to JavaScript', 'Introduction to JavaScript']
// };


// // Parentheses are not required around an initialisation
// let { Name, Age, Courses} = student;
// let [ Introduction, GiveUp ] = Courses;

// /* The above two declarations are equivalent to
// let Name = student.Name;
// let Age = student.Age;
// let Courses = student.Courses;
// let Introduction = Courses[0];
// let GiveUp = Courses[1]; 

// */

// console.log(Name);
// console.log(Age);
// console.log(Courses);
// console.log(Introduction);
// console.log(GiveUp);

// // Parentheses are required around assignment statements