// Declaration 声明
var student;
// Assignment 赋值
student = 'Jing';
student = 'Emily';

var student1, student2, student3;

student1 = 'Jim';
student2 = 'Tom';
student3 = 'Jack';

// console.log(student1);
// console.log(student2);
// console.log(student3);

var a = 0;
a = 'a string value';
a = true;
// console.log(a);

// hoisting
var car;
car = 'Honda civic'
console.log(car);

var aNum = 3.1415926;
aNum = NaN; // Not a number
aNum = Infinity;

if (isNaN(aNum))
{
    console.log('It\'s not a Number.')
}

// The string data type can be used to express both character and strings

var age = undefined;
var gender = null;

console.log(age);
console.log(gender);

var teacher = {};
console.log(teacher);

// teacher = {
//     teacherName: 'Jing',
//     age: 18,
//     gender: 'Male',
//     expertise: 'Frontend',
//     OnDuty: true
// }

teacher.age = 20;
teacher.OnDuty = false;
teacher[gender] = 'Male';

console.log(teacher.age);
console.log(teacher.OnDuty);
console.log(teacher[gender]);

var Students = 
[{ studentName: 'Jing'}, 
{ studentName: 'Emily' }, 
{ studentName: 'Holly' }]

var concat = 'Hello' + ' ' + 'World';
console.log(concat); // Hello World

var divide = 8/4;
var minus = 8-4;
var times = 2*2;
var equal = (2 == '2');
console.log(equal); // true

var equalNonStrict = (2 == '2'); // Non-strict equality
var equalStrict = (2 === '2'); // Strict equality

console.log(4 + 3 + '3'); // 73
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(1 + null) // 1
console.log(1 + undefined) // NaN

for (var i = 0; i < 10, i++;)
{
    console.log('Hello');
}

var i = 0;

// Skip and not print number 8
while (i < 10)
{
    if (i === 8)
    {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

// Requirement: Terminate when i is 5
var j = 0;
while (j < 10) 
{
    if (j === 5) 
    {
        break;
    }
    console.log(j);
    j++;
}

const res = [];
for (var i = 0; i <= 100; i++) 
{
    if (res.length == 10) {
        break;
    }

    if ((i % 4 === 0) && (i % 5 != 0)) {
        res.push(i);
    }
}
console.log(res);


function firstTen(param1, param2, param3)
{
    const res = [];
    for (var i = 0; i <= param3; i++)
    {
        if(res.length == 10)
        {
            break;
        }

        if ((i % param1 === 0) && (i % param2 != 0)){
            res.push(i);
        }
    }
    console.log(res);
}

console.log(firstTen())
