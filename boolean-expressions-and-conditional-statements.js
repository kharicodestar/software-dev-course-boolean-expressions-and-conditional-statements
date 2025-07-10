/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in the Matrix Vortex. There are two options you can take:
the first one taking the blue pill and one to take the red pill.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const easyRoute = true;
const hardRoute = false;

console.log("You have two options: take the blue pill or take the red pill");
const choice = readline.question("Do you take the blue pill or the red pill'?");

if (choice === "blue pill" && easyRoute) {
  console.log("The game is over and you get to go.");
} else if (choice === "blue pill" && !easyRoute) {
  console.log("You want to stay comfortable");
} else if (choice === "red pill" || hardRoute) {
  console.log("The game will continue and you'll face difficulty.");
} else {
  console.log("You love uncomfortability and harsh challenges.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/