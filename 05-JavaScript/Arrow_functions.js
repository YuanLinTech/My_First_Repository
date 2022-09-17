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

const Foo = () => { };
console.log(Foo.prototype); // undefined
// const foo = new Foo(); // TypeError: Foo is not a constructor

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

// // Spread syntax
// const foo = ['one', 'two', 'three'];
// const [red, ...rest] = foo;

// const newFoo = [...foo, 'four'];