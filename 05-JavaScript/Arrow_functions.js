var sum = function(num1,num2)
{
    return num1 + num2;
}

// Equivalent to
var sum = (num1, num2) => 
{
    return num1 + num2;
}

// Omit the return statement
var sum = (num1, num2) => num1 + num2; // Return can be omitted only if the function body consists of only one line

const fruitInventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
    { name: 'oranges', quantity: 3}
];

const result = fruitInventory.find(({name}) => name === 'cherries'); // Find the first occurrence of the fruit item with the name 'cherries'. Note the {} around "name".
// const result = fruitInventory.find((name) => name === 'cherries');
// console.log(result) // undefined
const emptyStock = fruitInventory.find((fruit)=> fruit.quantity === 0); // Find the fruit occurrence of the fruit item with no stock. Note that there are no {} around "fruit".
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
// let { Introduction, GiveUp } = Courses;

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