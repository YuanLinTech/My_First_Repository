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

console.log(cheese.name);
console.log(cheese.price);
console.log(cheese.category);

console.log(fun.name);
console.log(fun.price);
console.log(fun.category);

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

function greet() 
{
    const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}

const obj = 
{
    animal: 'cats',
    sleepDuration: '12 and 16 hours',
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours

// Using call() to invoke a function and without specifying the first argument

// var creates a property on the global object
var globProp = 'Wisen';

function display() 
{
    console.log('globProp value is ' + globProp);
}

display.call(); // Prints out "globProp value is Wisen"