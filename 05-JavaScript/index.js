const object1 = {
    who: 'Mason',
    cb(){
        function foo(){
            console.log(`Hello, ${this.who}!`)
        }
        foo();
    },
}

console.log(object1.cb());
/*
Hello, undefined! (the this parameter for the foo() function is undefined)
undefined (the foo() function returns undefined)
*/

const object2 = {
    who: 'Mason',
    cb() {
        console.log(`Hello, ${this.who}!`);
    }
};

function foo(cb){
    cb();
}

console.log(object2.cb());
/*
Hello, Mason!
undefined (the object2.cb() function returns undefined)
*/
console.log(object2.cb); // [Function: cb]
console.log(foo(object2.cb));
// Note that console.log(foo(object2.cb())) will cause a TypeError: cb is not a function
/*
Hello, undefined! (objects.cb is a function that returns undefined, so the argument for the foo() function is undefined)
undefined (the foo() function returns undefined)
*/