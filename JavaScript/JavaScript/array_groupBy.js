const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' }
];

const groupByCategory = products.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
}, {});

console.log(groupByCategory);

/*
{
  fruits: [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' }
  ],
  vegetables: [ { name: 'potatoes', category: 'vegetables' } ]
}
*/

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduce(getMax, 50)); // 100
console.log([50].reduce(getMax, 10)); // 50

// callback is invoked once for element at index 1
console.log([1, 100].reduce(getMax)); // 100

// callback is not invoked
console.log([50].reduce(getMax)); // 50
console.log([].reduce(getMax, 1)); // 1

// console.log([].reduce(getMax)); // TypeError

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

// How reduce() works without an initial value
array.reduce(reducer);

// How reduce() works with an initial value
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);

// Sum of values in an object array
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6

// reduce() skips missing elements in sparse arrays, but it does not skip undefined values.
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN