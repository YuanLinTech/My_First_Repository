
// truthy && something === something
// falsy && something === false

var a1 = true && "dog";
console.log(a1);

var a2 = "cat" && "dog";
console.log(a2);

var a3 = false && "cat";
console.log(a3);

var a4 = "cat" && false;
console.log(a4);

var a5 = "" && false;
console.log(a5);

var a6 = false && "";
console.log(a6);

// truthy || something === true
// falsy || something === something

var b1 = true || "dog";
console.log(b1);

var b2 = "cat" || "dog";
console.log(b2);

var b3 = false || "cat";
console.log(b3);

var b4 = "cat" || false;
console.log(b4);

var b5 = "" || false;
console.log(b5);

var b6 = false || "";
console.log(b6);


/* var c = a && b
If a is truthy, then c === b.
If a is falsy, them c === false. */