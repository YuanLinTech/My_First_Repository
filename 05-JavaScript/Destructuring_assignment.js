const x = [1, 2, 3, 4, 5];
const [y, z, ...rest] = x;
console.log(y); // y = 1
console.log(z); // z = 2
console.log(rest); // rest = [3, 4, 5]

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
console.log(a); // a = 1
console.log(b); // b = 2