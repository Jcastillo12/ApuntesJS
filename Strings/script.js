'use strict';

const airlines = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log(airlines.length);
// console.log('B737'.length);

// // First ocurrence
// console.log(airlines.indexOf('r'));

// // Last ocurrence
// console.log(airlines.lastIndexOf('r'));

// // Entire Words
// console.log(airlines.indexOf('Portugal'));

// console.log(airlines.slice(4));

// //Llega hasta 7 y le resta 4 = 3 = Air
// console.log(airlines.slice(4,7));

// Now, let's extract the first word of a random word without knowing the index.
// First, find the index of first space
console.log(airlines.slice(0,airlines.indexOf(' ')));

//Last word
console.log(airlines.slice(airlines.lastIndexOf(' ')+1));

//Start extracting from the end
console.log(airlines.slice(-2));

// We can also especify a negative end parameter
console.log(airlines.slice(1,-1));

// Sample

const checkMiddleSeat = function(seat){
  // B and E are middle seats
  const s = seat.slice(-1);
  const string = s === 'B' ? `You got the middle seat` : `You got lucky`;
  console.log(string);
}


checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3A');

// Take the last character of the string and check if it is a middle seat.