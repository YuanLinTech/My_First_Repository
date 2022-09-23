var x = [1, 2, 3, 4, 5];
var [y, z, ...rest] = x;
console.log(y); // y = 1
console.log(z); // z = 2
console.log(rest); // rest = [3, 4, 5]

var obj = { a: 1, b: 2 };
var { a, b } = obj;
// is equivalent to:
// var a = obj.a;
// var b = obj.b;
console.log(a); // a = 1
console.log(b); // b = 2

var x = ([a, b] = [10, 20]) => a + b; /* Used destructuring assignment to assign a the default value of 10 and b the default value of 20. */
console.log(x()); // Output: 30
// console.log(x(2, 3)); // TypeError: number 2 is not iterable (cannot read property Symbol(Symbol.iterator))
console.log(x([2, 3])); // Output: 5

var y = ({ a, b } = { a: 10, b: 20 }) => a + b; /* Used destructuring assignment to assign a the default value of 10 and b the default value of 20. */
console.log(y()); // Output: 30
// console.log(y({2,3})); SyntaxError: Unexpected token ','
console.log(y({a: 2, b: 3})); // Output: 5

const numbers1 = [];
const obj1 = { a: 1, b: 2 };
// { a: numbers1[0], b: numbers1[1] } = obj1; // SyntaxError: Unexpected token ':'
({a: numbers1[0], b: numbers1[1]} = obj1); 
// is equivalent to:
// numbers1[0] = obj1.a;
// numbers1[1] = obj1.b;
console.log(numbers1); // Output: [ 1, 2 ]

/* const numbers2 = [];
const obj2 = { a: 1, b: 2 };
const { a: numbers2[0], b: numbers2[1] } = obj2; // SyntaxError: Identifier 'numbers2' has already been declared */

var numbers2 = [];
var obj2 = { a: 1, b: 2 };
({ a: numbers2[0], b: numbers2[1] } = obj2);
// is equivalent to:
// numbers2[0] = obj2.a;
// numbers2[1] = obj2.b;
console.log(numbers2); // Output: [ 1, 2 ]


/* var { a: numbers2[0], b: numbers2[1] } = obj2; // SyntaxError: Invalid destructuring assignment target
// This is equivalent to:
// var numbers2[0] = obj2.a;
// var numbers2[1] = obj2.b;
// Which definitely is not valid. */





