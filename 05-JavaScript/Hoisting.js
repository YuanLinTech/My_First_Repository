carName = "Volvo";
var carName;
console.log(carName);// Expected output: Volvo

CarName = "Saab";
// const CarName; SyntaxError: Missing initializer in const declaration
// let carName; ReferenceError: Cannot access 'CarName' before initialization
console.log(CarName); // Expected output: Saab
var CarName;

var m = 1;
var m = 2;
console.log(m); // Expected output: 2

const n = 1;
// const n = 2; // SyntaxError: Identifier 'n' has already been declared
console.log(n); // Expected output: 1

// var x = 5; // Initialize x
// var y = 7; // Initialize y
// console.log(x + " " + y); Output: 5 7

var x = 5; // Initialize x
console.log(x + " " + y); // Output: 5 undefined
var y = 7; // Initialize y

z = 5; // ReferenceError: Cannot access 'z' before initialization
console.log(z);
const z = 7; // Initialize z

// const PI; // SyntaxError: Missing initializer in const declaration
// PI = 3.14159265359;

// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"]; // TypeError: Assignment to constant variable.

// const car = { type: "Fiat", model: "500", color: "white" };
// car = { type: "Volvo", model: "EX60", color: "red" }; // TypeError: Assignment to constant variable.
// console.log(car)
