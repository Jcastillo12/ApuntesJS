'use strict';

//Sample #1
function sum(a,b){
    return a+b;
}
// Arrow Function Version
let sum = (a,b) => {
    return a+b;
}

// Shorter Arrow Function
let sum = (a,b) => a+b;


//*********************************** */

//Sample #2
function isPositive(number){
    return number >= 0;
}

// Arrow Function Version
let isPositive = (number) => {
    return number >= 0;
}

// Shorter Arrow Function
// If you have only one parameter, you can actually remove, the parenthesis.
let isPositive = number => number >= 0;


//*********************************** */

//Sample #3
function randomNumber(){
    return  Math.random;
}

// Arrow Function Version
let randomNumber = () =>{
    return  Math.random;
}

// Shorter Arrow Function
let randomNumber = () => Math.random;


//*********************************** */
//Sample #4

//The arrow function shines more when you want to define them as anonymous functions, for example
// Check this Event listener

document.addEventListener('click',function(){
    console.log('click');
});

// If we would like to change that statement into an arrow function, we could do it like this.

document.addEventListener('click',() => console.log('click'));

/*
 The biggest reason of using Arrow function is in scoping the this keyword.
 Is much more intuitive. 
 
*/

 class Person{
    constructor(name){
        this.name
    }

    printNameArrow(){
        setTimeout(() => {
           console.log(`Arrow ${this.name}`); 
        }, timeout);
    }

    printNameFunction(){
        setTimeout(function(){
            console.log(`Function ${this.name}`); 
        },timeout)
    }

 }

 let person = new Person('Bob');
 person.printNameArrow();
 person.printNameFunction();
 console.log(this.name);






