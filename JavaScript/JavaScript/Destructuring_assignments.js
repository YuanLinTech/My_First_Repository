var x = [1, 2, 3, 4, 5];
var [y, z, ...rest] = x;
console.log(y); // y = 1
console.log(z); // z = 2
console.log(rest); // rest = [3, 4, 5]

const obj = { A: 1, B: { C: 2 } };
const { A, B: { C: D } } = obj;
// Two variables are bound: `A` and `B`
// This is equivalent to
// const A = obj.A;
// const {C: D} = obj.B;
console.log(A); // 1
console.log(D); // 2

var myObj = { a: 1, b: { c: 2 } };
var { a } = myObj; // a is constant
// const { a } = obj is equivalent to const a = myObj.a;
console.log(a); // 1

let { b: { c: d } } = myObj; // d is re-assignable
// let { b: { c: d } } = obj is equivalent to {c: d} = obj.b, which is equivalent to {c: d} = {c: 2}
console.log(d); // 2


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
// This is equivalent to:
// numbers1[0] = obj1.a;
// numbers1[1] = obj1.b;
console.log(numbers1); // Output: [ 1, 2 ]

/*
Note that the equivalent binding pattern of the code above is not valid syntax:

const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

This is equivalent to:
const numbers[0] = obj.a;
const numbers[1] = obj.b;
Which definitely is not valid.*/

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

var { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a); // Output: 1
console.log(others); // Output: { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // Output: [2, 3]

var foo = ['one', 'two', 'three'];
var [red, yellow, green] = foo;
console.log(red); // Output: "one"
console.log(yellow); // Output: "two"
console.log(green); // Output: "three"

var foo = ['one', 'two'];
var [red, yellow, green, blue] = foo;
console.log(red); // Output: "one"
console.log(yellow); // Output: "two"
console.log(green); // Output: undefined
console.log(blue);  // Output: undefined

// Swapping variables
let m = 1;
let n = 3;

[m, n] = [n, m];
console.log(m); // Output: 3
console.log(n); // Output: 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // Output: [1, 3, 2]

function f() {
    return [1, 2, 3];
}

[a, , b] = f();
console.log(a); // Output: 1
console.log(b); // Output: 3

[c] = f();
console.log(c); // Output: 1

var o = { p: 42, q: true };
var { p: foo, q: bar } = o;
// This is equivalent to
// const foo = o.p;
// const bar = o.q;

console.log(foo); // 42
console.log(bar); // true