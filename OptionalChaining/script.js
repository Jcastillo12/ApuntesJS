'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Optional Chaining
// We need to check if this exist - right now is undefined
//console.log(restaurant.openingHours.mon.open);

//To solve this problem we could do this, but this option only check for 1 value.
// if(restaurant.openingHours.mon){
//   //console.log(restaurant.openingHours.mon.open);
// }

// With Optional Channing if a certain property does not exist, then undifined is returned inmediately
// Here is how it works. Using ? operator.

//console.log(restaurant.openingHours.mon?.open);
//console.log(restaurant.openingHours?.mon?.open);

// That would mean that only if the property that is before the ? the property will be read.
// A property exists if is not null or undefined.

// Real Life Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days){
 // console.log(day);

  //Remember that when we refer to an object
  const open= restaurant.openingHours[day]?.open ?? 'closed';
 // console.log(`On ${day}, we open at ${open}`);
}


// Optional chaining on Methods - To check if method exist before calling

console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');


// Optional Chainning on Arrays - Check if array is empty

const users=[
  {
    name:'John',
    email:'test@test.com'
  },
  5
]

console.log(users[0]?.name ?? 'User array empty');

// Without optional chainning the old fashion way would be
if(users.length>0){
  console.log(users[0].name);
}else{
  console.log('User array empty');
}