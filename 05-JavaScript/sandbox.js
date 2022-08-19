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

var a = 0;
a = 'a string value';
a = true;
console.log(a); // true

// hoisting
car = 'Honda civic'
console.log(car);
var car; // Honda civic

var aNum = 3.1415926;
aNum = NaN; // Not a number

if (isNaN(aNum))
{
    console.log('It\'s not a Number.') // It's not a number.
}

// foo does not exist. It is not defined and has never been initialized:
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

// foo2 has been initialised but it has no value.
var foo2 = null;
console.log(foo2); //null
console.log(typeof(foo2)); // object

var teacher = {};
console.log(teacher); // {}
console.log(typeof teacher);// object

// var teacher = {
//     teacherName: 'Jing',
//     age: 18,
//     gender: 'Male',
//     expertise: 'Frontend',
//     OnDuty: true
// }

teacher.age = 20;
teacher.OnDuty = false;
teacher.gender = 'Male';

console.log(teacher.age); // 20
console.log(teacher.OnDuty); // false
console.log(teacher.gender); // Male
console.log(teacher); // { age: 20, OnDuty: false, gender: 'Male' }

var concat = 'Hello' + ' ' + 'World';
console.log(concat); // Hello World

var divide = 8/4;
var minus = 8-4;
var times = 2*2;

console.log(2 == '2'); // Non-strict equality. Expected output: true
console.log(2 === '2'); // Strict equality. Expected output: false
console.log(1 == true); // true

console.log(4 + 3 + '3'); // 73
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(1 + null) // 1
console.log(1 + undefined) // NaN

console.log(NaN == NaN) // False