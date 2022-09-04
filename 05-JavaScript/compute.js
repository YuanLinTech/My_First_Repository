
// truthy && something === something

a1 = true && true;
a2 = "cat" && "dog";
a3 = false && "cat";
a4 = "cat" && false;
a5 = "" && false;

b1 = "cat" || "dog";
b2 = false || "cat";



console.log(true && true);
console.log(true && false);
console.log(true && 123);

// falsey && something === false


var c = a && b
// if a is true, then c === b
// if a is false, them c === false

// truthy || something === true

// falsey || something === something