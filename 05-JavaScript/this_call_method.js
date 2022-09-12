// Using call() to chain constructors for an object
function Product(name, price) 
{
    this.name = name;
    this.price = price;
}

function Food(name, price) 
{
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) 
{
    Product.call(this, name, price);
    this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);

console.log(cheese.name); // Output: feta
console.log(cheese.price); // Output: 5
console.log(cheese.category); // Output: food

console.log(fun.name); // Output: robot
console.log(fun.price); // Output: 40
console.log(fun.category); // Output: toy

// Using call() to invoke an anonymous function
const animals = 
[
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

function assignPrintMethod(i) 
{
    this.print = function() 
    {
        console.log(i + ' ' + this.species+ ': ' + this.name);
    }
    this.print();
}

for (let i = 0; i < animals.length; i++) 
{
    assignPrintMethod.call(animals[i], i);
}

/* Output:
0 Lion: King
1 Whale: Fail */

function greet() 
{
    const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}

const obj = 
{
    animal: 'Cats',
    sleepDuration: '12 and 16 hours',
};

greet.call(obj);  // Output: Cats typically sleep between 12 and 16 hours

// Using call() to invoke a function and without specifying the first argument

// var creates a property on the global object
var globProp = 'Wisen';

function display() 
{
    console.log('globProp value is ' + globProp);
}

display.call(); // Prints out "globProp value is Wisen"