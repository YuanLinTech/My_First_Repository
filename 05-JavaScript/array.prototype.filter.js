const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result); // result is ["exuberant", "destruction", "present"]

function isBigEnough(value) {
    return value >= 10;
}

console.log(isBigEnough(1)); // false

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough); 
console.log(filtered); // filtered is [12, 130, 44]

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];
  
let invalidEntries = 0;
  
function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
}
  
const arrByID = arr.filter(filterByID);
  
console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
console.log("Number of Invalid Entries = ", invalidEntries);
// Number of Invalid Entries = 5

  