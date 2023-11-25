'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log(`-------- OR ---------`);
//restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);


// Short Short circuting with OR operator
// But, if the restaurant.numGuest = 0, will not work, because it is a falsy value.
const guest2 = restaurant.numGuest || 10;
console.log(guest2);


//Short circuting with AND operator
console.log(`-------- AND ---------`);
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

//So that means is that if the first one is false, the entire operation will be false and viceversa.

console.log('Hello' && 23 && null && 'jonas');
// In this case the circuit will end in null, because it is a falsy value.

if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); 

//Nullish Operator with ?? operator
console.log(`-------- ?? ---------`);


restaurant.numGuest = 0;
//Nullish: it will return only nullish values null and undefined (NOT 0 or '');
const guest3 = restaurant.numGuest ?? 10;
console.log(guest3);

