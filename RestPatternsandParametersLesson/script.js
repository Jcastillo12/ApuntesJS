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

  orderPizza:function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
    
  }
};



//Spread Sintax is on right side of =

const arr=[1,2,...[3,4]];

//Rest syntax is on left side

const[a,b,...others]=[1,2,3,4,5];
console.log(others);

// The rest of element that we didnt select are stored in an array. The rest element always must be
//the last element and there can only be 1.

 const[pizza, , rissotto, ...otherFood] =[...restaurant.mainMenu, ...restaurant.starterMenu];

 console.log(pizza, rissotto,otherFood);


// It also work on objects
/* Let's see the following example, we only want to take saturday and the other days in weekdays */
const {sat,...weekdays}= restaurant.openingHours;
console.log(weekdays);


// Functions -- Rest Parameters
const add = function(...numbers){

  let sum =0;
  for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
    console.log(sum);
  }


}

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x =[23,5,7];

add(...x);


restaurant.orderPizza('Mushrooms','onion', 'olives','spinach')