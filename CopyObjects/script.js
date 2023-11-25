'use strict';

const jessica = {
    firstName:'Jessica',
    lastName:'Williams',
}

//Creates a copy of the original object and store it in a new object. BUT THIS ONLY WORKS ON THE FIRST LEVEL.

const jessicaMarried = Object.assign({},jessica);
jessicaMarried.lastName="Davis";

console.log('Before Married', jessica.lastName)
console.log('After Married', jessicaMarried.lastName);

// Meaning, it only creates a shallow copy (only the first level). Check this sample.

const jessica2 = {
    firstName:'Jessica',
    lastName:'Williams',
    age:27,
    family:['Alice','Bob'],
}

const jessicaCopy = Object.assign({},jessica2);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Married', jessica2);
console.log('After Married', jessicaCopy);

// Both objects point to the same object. So, that wont work. What we need
// is a deep clone. We can do this with an external library called Lodash