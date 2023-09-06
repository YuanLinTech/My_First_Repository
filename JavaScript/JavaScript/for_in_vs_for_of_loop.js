const object1 = {
    a: 'somestring',
    b: 42,
};
  
console.log(Object.entries(object1)); // [ [ 'a', 'somestring' ], [ 'b', 42 ] ]

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

/* Output:
"a: somestring"
"b: 42" */

const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

/* Output:
"obj.a = 1"
"obj.b = 2"
"obj.c = 3" */

const myObj = { foo: "bar", baz: 42 };
console.log(Object.entries(myObj)); // [ ['foo', 'bar'], ['baz', 42] ]

const array = ["a", "b", "c"];
console.log(Object.entries(array)); // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]

// Non-string properties of an object are coerced to strings and sort ascendingly
const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// Using for...of loop
const obj1 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj1)) {
  console.log(`${key} ${value}`); 
}

/* 
Output:
a 5
b 7
c 9
*/

// Using array methods
Object.entries(obj1).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

/* 
Output:
a 5
b 7
c 9
*/

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const numArray = [10, 20, 30];

for (let value of numArray) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

// Iterating over a string
const string = "boo";

for (const value of string) {
  console.log(value);
}
// "b"
// "o"
// "o"

// Iterating over a TypedArray
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255

// Iterating over a Set
const set = new Set([1, 1, 2, 2, 3, 3]);

for (const value of set) {
  console.log(value);
}
// 1
// 2
// 3

function foo() {
    for (const value of arguments) {
        console.log(value);
    }
}
  
foo(1, 2, 3);
// 1
// 2
// 3

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
  console.log(pet); // "species"
}
for (let pet of pets) {
  console.log(pet);
}
// "Cat"
// "Dog"
// "Hamster"

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const myIterable = [3, 5, 7];
myIterable.foo = "hello";

for (const i in myIterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"

for (const i in myIterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

for (const i of myIterable) {
  console.log(i);
}
// 3 5 7
// it doesn't log "3", "5", "7", "hello", [Function (anonymous)], [Function (anonymous)]

var arr = [3, 5, 7];
arr.foo = "hello";
    
for (var i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}
    
for (var i of arr) {
  console.log(i); // logs "3", "5", "7"
  // it doesn't log "3", "5", "7", "hello"
}

let list = [4, 5, 6];
for (let i in list) {
  console.log(i); // "0", "1", "2",
}
for (let i of list) {
  console.log(i); // 4, 5, 6
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
  console.log(pet); // "species"
}
for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}