// Semicolon only required in JavaScript when you need to write multiple statements on the same line.
// Semicolons only exist to separate multiple statements on the same line.
// Declaration 声明
var student;
// Assignment 赋值
student = 'Jing';
student = 'Emily';

var student1, student2, student3;

student1 = 'Jim';
student2 = 'Tom';
student3 = 'Jack';

console.log(student1); // Jim
console.log(student2); // Tom
console.log(student3); // Jack

var m = 0;
m = 'a string value';
m = true;
console.log(m); // true

// hoisting
car = 'Honda civic'
console.log(car); // Honda civic
var car; 

var aNum = 3.1415926;
aNum = NaN; // Not a number

if (isNaN(aNum))
{
    console.log('It\'s not a Number.') // It's not a number.
}  

// Postfix increment
var i = 42;
console.log(i++); // Print out the value of i before incrementing, then increment i by 1 (Expected output: 42)
console.log(i); // Expected output: 43

let x = 3;
y = x++; // Assign to y the value of x before incrementing, then increment x by 1.
console.log(x); // Expected output: 4
console.log(y); // Expected output: 3

// Prefix increment
i = 42;
console.log(++i); // Increment i by 1, then print out the value of i after incrementing (Expected output: 43)
console.log(i); // Expected output: 43

let a = 2;
b = ++a; // Increment a by 1, then assign to b the value of a after incrementing. 
console.log(a); // Expected output: 3
console.log(b); // Expected output: 3


// foo does not exist. It is not defined and has never been initialized:
// console.log(foo); // ReferenceError: foo is not defined
console.log(typeof(foo)); //undefined

// foo1 is known to exist but it has never been initialized;
var foo1;
console.log(foo1); //undefined
console.log(typeof(foo1)); //undefined

function plus1(i)
{
    i++;
}

console.log(plus1(1));// undefined The return value of function plus1 is not defined, therefore it returns the value "undefined".

var t = 1;
console.log(t); // 1

console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(null === null); // true

// foo2 has been initialised but it has no value.
var foo2 = null;
console.log(foo2); //null
console.log(typeof(foo2)); // object

// SyntaxError: Invalid left-hand side in assignment
// null = 'value'; // ReferenceError

undefined = 'value'; 
console.log(undefined); // undefined

var teacher = {};
console.log(teacher); // {}
console.log(typeof teacher);// object

var arr = [1,2,3];
console.log(typeof arr);// object

// var teacher = {
//     teacherName: 'Jing',
//     age: 18,
//     gender: 'Male',
//     expertise: 'Frontend',
//     OnDuty: true
// }

// "teacher" is an object with named indexes.
teacher.age = 20;
teacher.OnDuty = false;
teacher.gender = 'Male';

console.log(teacher.age); // 20
console.log(teacher.OnDuty); // false
console.log(teacher.gender); // Male
console.log(teacher); // { age: 20, OnDuty: false, gender: 'Male' }

var concat = 'Hello' + ' ' + 'World';
console.log(concat); // Hello World

console.log(2 == '2'); // Non-strict equality. Expected output: true
console.log(2 === '2'); // Strict equality. Expected output: false
console.log(1 == true); // true

console.log(4 + 3 +'3'); // 4 + 3 + '3' -> 7 + '3' -> '7' + '3' = '73'
console.log('4'+ 3 + 3); // '4' + 3 + 3 -> '4' + '3' + 3 -> '43' + 3 -> '43' + '3' -> '433' 

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(1 + null) // 1
console.log(1 + undefined) // NaN

console.log(NaN == NaN) // False

