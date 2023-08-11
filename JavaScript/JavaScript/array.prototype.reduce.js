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