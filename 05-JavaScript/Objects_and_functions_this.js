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
const kensCar = new Car('Nissan', '300ZX', 1992);

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

function Car(make, model, year, owner) {
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
