/*

Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �

4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK 

*/


'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*******************************************************************************/
/*

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")

*/

// First try
let count=1;
for(const player of game.scored){
 // console.log(`Goal ${count}: ${player}`);
  count++;
}

// With a little hint - Correct Way - Because this is an array
for(const [number, player] of game.scored.entries()){
  console.log(`Goal ${number+1}: ${player}`);
}

/*******************************************************************************/
/*
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)

  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

*/
let average=0;
const entries=Object.entries(game.odds);
console.log(entries);

// With destucturing - First Try - For this case, we want the values, not both, so 
// my first try the key is not being used.

/*
      for(const [key, avg] of entries){
        console.log(avg);
        average = average+avg;
      }
*/

// Property Values
const values = Object.values(game.odds);
console.log(values);

for(const avg of values){
  console.log(avg);
  average += avg;
}

// My option
/* 
  let averageOdd=average/entries.length;
*/
average /= values.length;
console.log(`Average Odd: ${average}`);

/*******************************************************************************/

/*
  3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
  Odd of victory Bayern Munich: 1.33
  Odd of draw: 3.25
  Odd of victory Borrussia Dortmund: 6.5
  Get the team names directly from the game object, don't hardcode them 
  (except for "draw"). Hint: Note how the odds and the game objects have the 
  same property names �


  const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

*/

const oddsResult = Object.entries(game.odds);

for(const [team, odd] of oddsResult){
   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`
   console.log(`Odd of ${teamString} ${odd}`);
}


/********************************************************************* */
/*

4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
  {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
  }

*/

// BONUS


/*
 scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
*/

const scorers = {};
for (const player of game.scored) {
 
  /* 
     // If the player is already a property in 'scorers', increment their goal count
    if (scorers[player]) {
      scorers[player] += 1;
    } else {
      // If the player is not a property in 'scorers', initialize their goal count to 1
      scorers[player] = 1;
    }
  */
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
 
}

console.log(scorers);


// So the solution is to loop over the array, and add the array elements as object properties, 
// and then increase the count as we encounter a new occurence of a certain element


/*
In JavaScript, the process of adding the player's name to the scorers object doesn't require explicitly 
setting scorers = player; or anything similar.

The code achieves this by utilizing the player's name as a key within the scorers object. Let's break it down:

for (const player of game.scored) {
  if (scorers[player]) {
    scorers[player] += 1;
  } else {
    scorers[player] = 1;
  }
}

When player represents a player's name (e.g., 'Lewandowski', 'Gnarby', etc.):

The scorers object is initialized as an empty object: const scorers = {};

The for...of loop iterates through each player in the scored array.

For each player, it checks if that player name exists as a property in the scorers object.

If the player name already exists as a property in scorers (i.e., if (scorers[player]) evaluates to true), 
it means the player has already scored at least once. In this case, it increments the value associated with that player key by 1: scorers[player] += 1;.

If the player name does not exist as a property in scorers (i.e., the else condition), it means it's the first 
goal for that player. So, it sets the value associated with the player key to 1: scorers[player] = 1;.

So, scorers[player] actually creates a property in the scorers object using the player name as the key and then 
assigns or increments the number of goals for that player.

Therefore, you don't explicitly see scorers = player; because the scorers object is being populated dynamically 
using the player's name as the key during the loop iteration.

/********************************************************************************/
/*

In JavaScript, objects work as key-value pairs. When you use scorers[player], it refers to the player variable as the key to access or create a property in the scorers object.

Let's break it down step by step:

Initially, const scorers = {}; creates an empty object called scorers.

The for...of loop iterates through the scored array.

For each player in the array:

scorers[player] is used as the key to access a property in the scorers object.

If the player name doesn't exist as a property in scorers, it's created on-the-fly. For example, when 'Lewandowski' is encountered for the first time, scorers['Lewandowski'] doesn't exist yet, so it creates a property 'Lewandowski' in the scorers object and initializes its value to 1: scorers['Lewandowski'] = 1;

If the player name already exists as a property in scorers, it means the player has scored before. In this case, scorers['Lewandowski'] (for example) already exists, and its value is accessed and incremented by 1: scorers['Lewandowski'] += 1;, which effectively increases the goal count for 'Lewandowski'.

JavaScript objects allow dynamic creation of properties. So, when you use scorers[player], if that property (with the key as player) doesn't exist, it creates it on the fly. If it does exist, it accesses that property and allows you to modify its value.

This mechanism helps in creating a structure where each player's name acts as a key, and their goal count is stored as the value associated with that key within the scorers object.


*/