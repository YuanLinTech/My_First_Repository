'use strict';
let Foo = class { };  // constructor property is optional
Foo = class { };      // Re-declaration is allowed

console.log(typeof(Foo));             // function
console.log(typeof(class{ }));        // function

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

/* class ChildClass extends ParentClass {
    constructor() {
        return 1;
    }
}

// console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined*/

// A base class is defined using the new reserved 'class' keyword
class Polygon {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor(height, width) {
        this.name = 'polygon';
        this.height = height;
        this.width = width;
    }

    // Simple class instance methods using short-hand method declaration
    sayName() {
        console.log('Hi, I am a ' + this.name + '.'); // Hi, I am a polygon.
    }

    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' + 'and gonia (angle).');
    }
}

// Classes are used just like ES5 constructor functions:
let p = new Polygon(300, 400);
p.sayName(); // Hi, I am a polygon.
console.log('The width of this polygon is ' + p.width); // The width of this polygon is 400

// Example 2: Creating a new class (expression-form)
// ===============================================================

// Our Polygon class above is an example of a class declaration.
// ES6 classes also support class expressions, which is just another way of defining a new class. For example:
const MyPoly = class Poly {
    getPolyName() {
        console.log('Hi. I was created with a class expression. My name is ' + Poly.name); 
    }
};

let inst = new MyPoly(); 
inst.getPolyName(); // Hi. I was created with a class expression. My name is Poly.

// Example 3: Extending an existing class
// ===============================================================

// Classes support extending other classes, but can also extend other objects. Whatever you extend must have a constructor.
//
// Let's extend the Polygon class to create a new derived class called Square.
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
        this.name = 'square';
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

s.sayName(); // Hi, I am a square.
console.log('The area of this square is ' + s.area); // The area of this square is 25

// Example 4: Subclassing methods of a parent class
// ===============================================================

class Rectangle extends Polygon {
    constructor(height, width) {
        super(height, width);
        this.name = 'rectangle';
    }
    // Here, sayName() is a subclassed method which
    // overrides their superclass method of the same name.
    sayName() {
        console.log('Sup! My name is ' + this.name + '.'); // Sup! My name is rectangle.
        super.sayHistory(); // "Polygon" is derived from the Greek polus (many) and gonia (angle).
    }
}

let r = new Rectangle(50, 60);
r.sayName();

const obj = {
    log: ['example', 'test'],
    latest() {
        if (this.log.length === 0) return undefined;
        return this.log[this.log.length - 1];
    }
}
console.log(obj.latest); // [Function: latest]
obj.latest = "hello";
console.log(obj.latest); // "hello"

const obj1 = {
    log: ['example', 'test'],
    get latest() {
        if (this.log.length === 0) return undefined;
        return this.log[this.log.length - 1];
    }
}
console.log(obj1.latest); // "test"
// obj.latest = "hello"; // TypeError: Cannot set property latest of #<Object> which has only a getter

const language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FR';
console.log(language.log); // ['EN', 'FR']

console.log(language.current); // undefined

class Greeting {
    #msg = "hello world";
    get msg() {
        return this.#msg;
    }
    set msg(x) {
        this.#msg = `hello ${x}`;
    }
}

// console.log(hello.msg) calls the get msg() function, while hello.msg = “cake” calls the set msg() function
const hello = new Greeting();
console.log(hello.msg); // "hello world"

hello.msg = "cake";
console.log(hello.msg); // "hello cake"

const o = { a: 0 };
Object.defineProperty(o, 'b', { get() { return this.a + 1; } });
/* Equivalent to
const o = {
    a: 0,
    get b() {
        return this.a + 1;
    }
}*/
console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)

const ob = { a: 0 };
Object.defineProperty(ob, 'b', {
    set(x) { this.a = x / 2; }
});

/* Equivalent to
const ob = {
    a: 0,
    set b(x) {
        this.a = x / 2;
    }
}*/

ob.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(ob.a); // 5

const expr = 'foo';

const ob1 = {
    baz: 'bar',
    set [expr](v) { this.baz = v; }
};

/* Equivalent to
const ob1 = {
    baz: 'bar',
    set foo(v) { this.baz = v; }
};*/

console.log(ob1.baz); // "bar"
ob1.foo = 'baz'; // Run the setter
console.log(ob1.baz); // "baz"
