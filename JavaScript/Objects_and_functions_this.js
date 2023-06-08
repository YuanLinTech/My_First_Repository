// Create an object type called "Foo"
function Foo(bar1, bar2) {
    this.bar1 = bar1;
    this.bar2 = bar2;
}
const myFoo = new Foo('Bar 1', 2021);
console.log(myFoo.bar1); // Expected output: Bar 1
console.log(myFoo.bar2); // Expected output: 2021

// Create an object type called "Car"
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const myCar = new Car('Eagle', 'Talon TSi', 1993);
const KensCar = new Car('Nissan', '300ZX', 1992);

console.log(myCar.color);    // undefined

Car.prototype.color = 'original color'; // Add a "color" property with value "original color" to all objects of type Car
console.log(myCar.color);    // 'original color'
console.log(KensCar.color);    // 'original color'

myCar.color = 'black';
console.log(myCar.color); // 'black'

console.log(Object.getPrototypeOf(myCar).color); // 'original color'
console.log(Object.getPrototypeOf(KensCar).color); // 'original color'
console.log(myCar.color);   // 'black'
console.log(KensCar.color);  // 'original color'

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const Rand = new Person('Rand McNally', 33, 'M');
const Ken = new Person('Ken Jones', 39, 'M');

function Car(make, model, year, color, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
}
const car1 = new Car('Eagle', 'Talon TSi', 'black', 1993, Rand);
const car2 = new Car('Nissan', '300ZX', 'grey', 1992, Ken);

// Print out the name of car2's owner
console.log(car2.owner.name); // Expected output: Ken

var Name = 'Maya';
console.log(Name); // Output: Maya
var newName = Name;
console.log(newName); // Output: Maya
Name = 'Joe';
console.log(newName); // Output: Maya

console.log({} == {}) // Output: false (Two objects are only equal, both strictly and non-strictly, if theyy reference the same object.)
console.log({} === {}) // Output: false

var person = { name: 'Maya', age: 29 };
console.log(person); // Output: { name: 'Maya', age: 29 }
var newPerson = person;
console.log(newPerson); // Output: { name: 'Maya', age: 29 }
person.name = 'Joe';
console.log(newPerson); // Output: { name: 'Joe', age: 29 }

// A function that prints out the indices of the pair(s) of elements in an integer array whose sum equals the target value.
// The function prints out an empty array if there are no pairs of elements whose sum equals the target value.
function getSumIndices(array, target)
{
    if (!Array.isArray(array) || array.length < 2)
    {
        console.log([]); // Print out an empty array if there are no pairs of elements whose sum equals the target value.
    }
    for (var i = 0; i < array.length-1; i++)
    {
        var index1 = i;
        var index2 = array.indexOf(target-array[i], index1+1); // Start searching from the position specified by index1+1 to avoid printing out the indices of the same pairs of numbers in different order or [4,4]

        // If there is another element in the array whose sum with the current element array[i] equals the target value
        if (index2 !== -1)
        {
            console.log([index1, index2]);
        }
    }
}

getSumIndices([1, 3, 4, 6, 7, 8, 10, 14, 15], 14); // [ 2, 6 ] [3, 5]

const member = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(member.fullName()); // Expected output: John Doe

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13, z: 31};

const clonedObj = { ...obj1 };
console.log(clonedObj); // Output: { foo: 'bar', x: 42 }

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { foo: 'baz', x: 42, y: 13, z: 31 }