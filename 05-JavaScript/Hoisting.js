carName = "Volvo";
var carName;
console.log(carName);// Expected output: Volvo

CarName = "Saab";
// const CarName; SyntaxError: Missing initializer in const declaration
// let carName; ReferenceError: Cannot access 'CarName' before initialization
var CarName;
console.log(CarName);

// var x = 5; // Initialize x
// var y = 7; // Initialize y
// console.log(x + " " + y); Output: 5 7

var x = 5; // Initialize x
console.log(x + " " + y); // Output: 5 undefined
var y = 7; // Initialize y

z = 5; // Initialize x
console.log(z); // Output: 5 undefined
let z = 7; // Initialize y
