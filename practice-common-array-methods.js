// Task 1: Create the Order System
let drinks = ["Latte", "Tea", "Espresso"];
let pastries = ["Croissant", "Muffin", "Bagel"];

// Task 2: Log the number of drinks and pastries
console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastries.length);

// Task 3: Access orders using bracket notation (three hardcoded combinations)
// 1) first drink and last pastry
console.log(drinks[0], pastries[pastries.length - 1]);
// 2) second drink and second pastry
console.log(drinks[1], pastries[1]);
// 3) third drink and first pastry
console.log(drinks[2], pastries[0]);

// Task 4: Access orders dynamically with variables
let drinkIndex = 1;   // will log the second drink
let pastryIndex = 2;  // will log the third pastry
console.log("Dynamic selection:", drinks[drinkIndex], pastries[pastryIndex]);

// Task 5: Loop that logs all drinks (dynamically uses .length)
for (let i = 0; i < drinks.length; i++) {
  console.log(`Drink ${i + 1}:`, drinks[i]);
}

// Task 6: Add a new order and track length
drinks.push("flat white"); // add the new order dynamically
console.log("Updated number of drinks:", drinks.length);

// Declare two variables and use them with bracket notation to log the selected order dynamically
let selectedDrinkIndex = drinks.length - 1; // index of the newly added "flat white"
let selectedPastryIndex = 0;                // index of the first pastry
console.log("Selected order (by variables):", drinks[selectedDrinkIndex], pastries[selectedPastryIndex]);
