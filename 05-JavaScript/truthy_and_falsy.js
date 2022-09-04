
// truthy && something === something
// falsy && something === falsy

var a1 = true && "dog";
console.log(a1); // Output: "dog"

var a2 = "cat" && "dog";
console.log(a2); // Output: "dog"

var a3 = false && "cat";
console.log(a3); // Output: false

var a4 = "cat" && false;
console.log(a4); // Output: false

var a5 = "" && "cat";
console.log(a5); // Output: ""

var a6 = false && "";
console.log(a6); // Output: false

var a7 = "" && false;
console.log(a7); // Output: ""

// truthy || something === truthy
// falsy || something === something

var b1 = true || "dog";
console.log(b1); // Output: true

var b2 = "cat" || "dog";
console.log(b2); // Output: "cat"

var b3 = false || "cat";
console.log(b3); // Output: "cat"

var b4 = "cat" || false;
console.log(b4); // Output: "cat"

var b5 = "" || "cat";
console.log(b5); // Output: "cat"

var b6 = false || "";
console.log(b6); // Output: ""

var b7 = "" || false;
console.log(b7); // Output: false

/* var c = a && b
If a is truthy, then c === b.
If a is falsy, them c === false. */