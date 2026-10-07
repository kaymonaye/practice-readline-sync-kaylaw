// Quiz: Values, Data Types, and Operations
// Run with: node quiz.js
const readline = require('readline-sync');

// Greet the user
const userName = readline.question("What's your name? ");
console.log(`\nHello, ${userName}! Welcome to the Values, Data Types, and Operations quiz.\n`);

// Ask 5 questions (use readline-sync.question() for each)
const answer1 = readline.question("1) Name one primitive data type in JavaScript (e.g., string, number, boolean): ");

const answer2Raw = readline.question("2) (Number) What is 5 + 3? ");
const answer2 = Number(answer2Raw); // convert the numeric response to a Number

const answer3 = readline.question("3) Which operator checks strict equality (value and type) in JavaScript? ");

const answer4 = readline.question("4) What does typeof null return in JavaScript? ");

const answer5 = readline.question("5) Which built-in function converts a string like '42' into a number? ");

// Print the user's answers back to them
console.log("\n--- Your Answers ---");
console.log(`Name: ${userName}`);
console.log(`1) Primitive data type: ${answer1}`);
console.log(`2) 5 + 3 (raw input): "${answer2Raw}"`);
console.log(`   5 + 3 (as Number): ${isNaN(answer2) ? "Not a valid number" : answer2}`);
console.log(`3) Strict equality operator: ${answer3}`);
console.log(`4) typeof null: ${answer4}`);
console.log(`5) String-to-number function: ${answer5}`);

// Optional: simple feedback (not required, but helpful)
console.log("\n--- Quick feedback ---");
if (!isNaN(answer2) && answer2 === 8) {
  console.log("Q2: Correct — 5 + 3 is 8.");
} else {
  console.log("Q2: Check your math — 5 + 3 equals 8.");
}

console.log("\nThanks for taking the quiz! Keep practicing and experimenting with values and types in JavaScript.");
