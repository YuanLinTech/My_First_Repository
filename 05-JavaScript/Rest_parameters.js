function longestString1(...StringArgs) {
    let longest = '';
    for (let i = 0; i < StringArgs.length; i++) {
        if (StringArgs[i].length > longest.length) {
            longest = StringArgs[i];
        }
    }
    return longest;
}

console.log(longestString1("integrity", "decency", "authenticity")) // expected output: authenticity

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);