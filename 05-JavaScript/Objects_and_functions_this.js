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

var person = { name: 'Maya', age: 29 };
console.log(person); // Output: { name: 'Maya', age: 29 }
var newPerson = person;
console.log(newPerson); // Output: { name: 'Maya', age: 29 }
person.name = 'Joe';
console.log(newPerson); // Output: { name: 'Joe', age: 29 }

// A function that prints out the indices of the pair(s) of elements in an integer array whose sum equal the target value.
// The function prints out an empty array if there are no pairs of elements whose sum equal the target value.
function getSumIndices(array, target)
{
    if (!array || array.length < 2)
    {
        console.log([]); // Print out an empty array if there are no pairs of elements whose sum equal the target value.
    }
    for (var i = 0; i < array.length; i++)
    {
        var index1 = i;
        var index2 = array.indexOf(target-array[i], index1); // Start searching from index 1 to avoid printing out the indices of the same pairs of numbers in different order

        // If there is another element in the array whose sum with the current element array[i] equals the target value
        if (index2 != -1)
        {
            console.log([index1, index2]);
        }
    }
}

getSumIndices([1, 3, 4, 6, 7, 8, 10, 14, 15], 14);