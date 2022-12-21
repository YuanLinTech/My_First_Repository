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
Hello, undefined!
undefined
*/

const object2 ={
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
undefined
*/

console.log(foo(object2.cb));
/*
Hello, undefined!
undefined
*/