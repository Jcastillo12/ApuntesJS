'use strict';

///////////////////////////////////////

// More important than sets

const rest = new Map(); //initialize or create empty map
rest.set('name', 'Classico Italiano'); // Set method = add method
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time> rest.get('open') && time< rest.get('close')));

// Check if a map contains a certain key

console.log(rest.has('categories'));
//rest.delete(2);
//rest.clear();
rest.set([1,2],'Test');
console.log(rest);
console.log(rest.size);



///////////////////////////////////////


