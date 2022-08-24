const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice());
// expected output: ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2));
// expected output: ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2)); // Last two elements
// expected output: ["duck", "elephant"]

console.log(animals.slice(2, -1)); // Third element through to the second to last element
// expected output: ["camel", "duck"]

const car = Array("Saab", "Volvo", "BMW");
console.log(car); // expected output: ['Saab', 'Volvo', 'BMW']

const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars); // expected output: ['Saab', 'Volvo', 'BMW']

// This example function accepts any number of string arguments and returns the longest one.
function longestString() {
    let longest = '';
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}

console.log(longestString("integrity", "decency", "authenticity"))
console.log(typeof arguments);
console.log(typeof arguments[0]);

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

// Requirement: Terminate when j is 5
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

function plus1(i) {
    i++;
}

console.log(plus1(1));// undefined The return value of function plus1 is not defined, therefore it returns the value "undefined".

var t = 1;
console.log(t); // 1

/* Find the first ten numbers between 0 and 100 that are multiples of 4 but not multiples of 5, 
and print out the numbers in an array. */
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

/* A function that finds the first ten numbers between 0 and param3 that are multiples of param1 but not multiples of param2, 
and print out the numbers in an array. */
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

console.log(firstTen(4,5,100));
console.log(typeof(firstTen(4, 5, 100)));

var sum = function(num1, num2){
    return num1+num2;
}

var newSum = sum;

// Functions can be used as variables.

function firstSumthenDouble(sumFunc, num1, num2){
    var sum = sumFunc(num1, num2);
    return sum*2;
}

console.log(firstSumthenDouble(sum, 2, 3));

var PersonObject = {
    PersonName: 'Jing',
    Age: 18
}

var Jing = PersonObject; // Copy the addr of aString to anotherString
PersonObject.Age = 19;
console.log(Jing.Age); // 19

var aString = 'know'; // Pass by value
var anotherString = aString; // Copy the value of aString to anotherString

aString = 'unknown';
console.log(aString);
console.log(anotherString);

// Function programming - interactions between functions
// Immutable functions (pure functions) - no side effects (don't change something that does not belong to the function)

var person = {
    name: 'Jing',
    age: 18,
    oocupation: 'dev'
}

function update(person){
    // Update person's age to +1
    person.age+=1;
}

console.age(person);

function increaseAgeByOne(person){ // Does not change the values of person.

    var myPerson = {
        name: person.name,
        age: person.age+1
    }
    return myPerson;
}

for (var key in person){
    console.log(key);
}