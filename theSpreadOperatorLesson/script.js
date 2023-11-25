'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
  orderPasta: function(ing1, ing2,ing3){
    console.log(`Here es your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};


const arr = [7, 8, 9];
const badNewArr=[1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);


//With the spread operator, it would be like this

const newArr= [1,2,...arr];
console.log(newArr);


const newArray = [...restaurant.starterMenu,'Gnocci'];

console.log(newArray);


//Create shallow copies of an array
const mainMenuCopy = [...restaurant.mainMenu];


//Join 2 arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: Arrays, strings, maps, sets. Not objects
const str= 'Jonas';
const letters =[...str,' ', 'S.'];
console.log(letters);

// We can only use the spread operator when building an array and passing an argument.
// Multiple values separated by a comma are only expected when we pass argument to a function or when 
// building a new array.


// 2. Create a function and use the spread operator.

// An array of prompts
//const ingredients=[prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];

//The old way would be
//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//The modern Syntax would be
//restaurant.orderPasta(...ingredients);

//Objects in ES6 (Remember that in objects, the order doesnt matter)
const newRestaurant ={...restaurant,
founder:'Guiseppe'}
console.log(newRestaurant);


// Not the same
const restaurantCopy ={...restaurant};
restaurantCopy.name='Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

