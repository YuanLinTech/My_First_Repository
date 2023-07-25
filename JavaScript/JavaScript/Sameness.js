console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(null === null); // true
console.log('\n');

console.log(0 == "0"); // true
console.log(0 === "0"); // false
console.log('\n');

console.log(0 == "a"); // false
console.log(0 === "a"); // false
console.log('\n');

console.log(1 == "01"); // true
console.log(1 === "01"); // false
console.log('\n');

console.log(10 == "1e1"); // true
console.log(10 === "1e1"); // false
console.log('\n');

console.log(100 == "1e2"); // true
console.log(100 === "1e2"); // false
console.log('\n');

console.log(1 == true); // true
console.log(1 === true); // false
console.log('\n');

console.log(0 == false); // true
console.log(1 === false); // false
console.log('\n');

console.log(2 == true); // false
console.log(2 === true); // false

console.log({} === {}); // false