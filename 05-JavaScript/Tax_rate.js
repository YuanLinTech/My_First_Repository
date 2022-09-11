// Readale, maintainable and reusable
let salaryRange = [0, 18200, 45000, 120000, 180000];
let taxRate = [0, 0.19, 0.325, 0.37, 0.45];
let startNum = [0, 0, 5092, 29467, 51667];

function findRange(salary)
{
    for (let i = salaryRange.length; i >= 0; i--)
    {
        if (salary > salaryRange[i])
        {
            const tax = ((salary - salaryRange[i]) * taxRate[i] + starNum[i]).toFixed(2);
            return tax;
        }
    }
}

var TAX_TABLE_2022 = 
[
    { min: 0, max: 18200, tax: 0, rate: 0},
    { min: 18200, max: 45000, tax: 0, rate: 0.19 },
    { min: 45000, max: 120000, tax: 5092, rate: 0.325 },
    { min: 120000, max: 180000, tax: 29467, rate: 0.37 },
    { min: 180000, max: Number.POSITIVE_INFINITY, tax: 51667, rate: 0.45 },
]

function calculateTax(income, taxTable)
{
    for (var i = 0; i< taxTable.length; i++)
    {
        if (income > taxTable[i].min && income <= taxTable[i].max)
        {
            var tax = taxTable[i].tax + (income - taxTable[i].min) * rate;
            return tax;
        }
    }
}

// SOLID: The First 5 Principles of Object Oriented Design
// SOLID stands for:

// S - Single - responsiblity Principle
// O - Open - closed Principle
// L - Liskov Substitution Principle
// I - Interface Segregation Principle
// D - Dependency Inversion Principle


