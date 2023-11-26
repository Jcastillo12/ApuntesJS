'use strict';

///////////////////////////////////////
// Sets

// Cant never have any duplicates
// In set we use Size to check the lenght
// Set doesnt retrieve index. No indexes. No way of getting values out of set
// Because all values are unique.
// The only thing to know is if the value exist or not.
// You can iterat a set.

// The main use of sets is to remove duplicates in arrays.

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');



// ordersSet.clear();
// console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}


// // Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// Convert Set to an Array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// Count how many letters are in a string.
console.log(new Set('jonasschmedtmann').size);

