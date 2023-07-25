function Person(name){
    this.name = name;
    this.greeting = function()
    {
        console.log(`Hi! I\'m ${this.name}.`);
    }
}

Person.prototype.getName = function(){
    return this.name;
}

var Alice = new Person('Alice');
var Bob = new Person('Bob');

Alice.greeting();
Alice.getName();
Bob.getName();

// this points to whatever the object that calls the function
function greeting(name)
{
    console.log('Hello ' + name);
}

var hello = greeting; // Assign the function greeting() to the variable "hello"

hello(); // No console.log because there is no caller

