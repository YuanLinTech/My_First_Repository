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
console.log(x(2,3)); // Output: 5

var y = ({ a, b } = { a: 10, b: 20 }) => a + b; /* Used destructuring assignment to assign a the default value of 10 and b the default value of 20. */
console.log(y()); // Output: 30
console.log(y(2,3)); // Output: 5