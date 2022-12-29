'use strict';
let Foo = class { };  // constructor property is optional
Foo = class { };      // Re-declaration is allowed

console.log(typeof(Foo));             // returns "function"
console.log(typeof(class{ }));        // returns "function"

console.log(Foo instanceof Object);   // true
console.log(Foo instanceof Function); // true
// class Foo { }; // SyntaxError: Identifier 'Foo' has already been declared

const Foo1 = class {
    bar() {
        return 'Hello World!';
    }
};

const instance = new Foo1();
console.log(instance.bar()); // "Hello World!"
console.log(Foo1.name); // "Foo1"

const Foo2 = class NamedFoo {
    whoIsThere() {
        return NamedFoo.name;
    }
}
const bar = new Foo2();
console.log(bar.whoIsThere()); // "NamedFoo"
// console.log(NamedFoo.name); // ReferenceError: NamedFoo is not defined
console.log(Foo2.name); // "NamedFoo"

const RectangleShape = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
};

console.log(new RectangleShape(5, 8).area());
// expected output: 40

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const otto = new Person("Otto");

otto.introduce(); // Hello, my name is Otto

class ParentClass {
    constructor() {
        return 1;
    }
}

console.log(new ParentClass()); // ParentClass {}
// The return value is ignored because it's not an object
// This is consistent with function constructors

class ChildClass extends ParentClass {
    constructor() {
        return 1;
    }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined

// A base class is defined using the new reserved 'class' keyword
class Polygon {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }

    // Simple class instance methods using short-hand method
    // declaration
    sayName() {
        ChromeSamples.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        ChromeSamples.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

    // We will look at static and subclassed methods shortly
}

// Classes are used just like ES5 constructor functions:
let p = new Polygon(300, 400);
p.sayName();
ChromeSamples.log('The width of this polygon is ' + p.width);

// Example 2: Creating a new class (expression-form)
// ===============================================================

// Our Polygon class above is an example of a Class declaration.
// ES6 classes also support Class expressions - just another way
// of defining a new class. For example:
const MyPoly = class Poly {
    getPolyName() {
        ChromeSamples.log('Hi. I was created with a Class expression. My name is ' +
            Poly.name);
    }
};

let inst = new MyPoly();
inst.getPolyName();

// Example 3: Extending an existing class
// ===============================================================

// Classes support extending other classes, but can also extend
// other objects. Whatever you extend must be a constructor.
//
// Let's extend the Polygon class to create a new derived class
// called Square.
class Square extends Polygon {
    constructor(length) {
        // The reserved 'super' keyword is for making super-constructor
        // calls and allows access to parent methods.
        //
        // Here, it will call the parent class' constructor with lengths
        // provided for the Polygon's width and height
        super(length, length);
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
    }

    // Getter/setter methods are supported in classes,
    // similar to their ES5 equivalents
    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this.area = value;
    }
}

let s = new Square(5);

s.sayName();
ChromeSamples.log('The area of this square is ' + s.area);

// Example 4: Subclassing methods of a parent class
// ===============================================================

class Rectangle extends Polygon {
    constructor(height, width) {
        super(height, width);
        this.name = 'Rectangle';
    }
    // Here, sayName() is a subclassed method which
    // overrides their superclass method of the same name.
    sayName() {
        ChromeSamples.log('Sup! My name is ', this.name + '.');
        super.sayHistory();
    }
}

let r = new Rectangle(50, 60);
r.sayName();