/*
Homework 1: control flow and loops
Student's name: Makhai Morgan
*/
console.log("\n------ Program 1: conditional statement ------")
// Ask the user to enter something
let userinput = prompt("Please enter something:"));

// Check if the user clicked Cancel
if (userInput === null) {
    console.log("Null and void!");
}
// Check if the user entered a blank string
else if (userInput === "") {
    console.log("Your answer was blank!");
}
// Otherwise, treat the input as a number
else {
    // Convert the input string to a number
    let num = Number(userInput);

    // Check if the conversion resulted in a valid number
    if (!isNaN(num)) {
        if (num > 0) {
           console.log("Think positively!"); 
        }  else if (num < 0) {
           console.log("Never have negative balance!");
        }  else {  // num === 0
           console.log("Yin and Yang!");
        }
      } else {
        // If the input cannot be converted to a number, you can decide how to handle it.
        // For now, we'll simply output that it's not a valid number.
        console.log("The input is not a number.");
    }
}
console.log("\n------ Program 2: for loop and nested conditional statement -----");

// Declare an empty array to store ten numbers.
let numbers = [];


// Use a for loop to collect ten numbers.
for (let i = 0; i < 10; i++) {
    let input = prompt(`Enter number ${i + 1} of 10:`);

    // Convert the input to a number.
    let num = parseFloat(input);


    // (Optional) Checl if the input is a valid number. Here, we assume the user enters valid numbers.
    if (isNaN(num)) {
       console.log(`Warning: "${input}" is not a valid number. Saving it as 0.`);
       num = 0;
    }

    // Add the number to the array.
    numbers.push(num);
  }

// Initialize counters for multiples of 3, 5, and 7.
let count3 = 0;
let count5 = 0;
let count7 = 0;

// Loop through the array and count the multiples.
for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    count3++;
  }
  if (currentNum % 5 === 0) {
    count5++;
  }
  if (cureentNum % 7 === 0) {
    count7++;
  }

// Display the results in the console.
console.log(`${count3} numbers are multiple of 3`);
console.log(`${count5} numbers are multiple of 5`);
console.log(`${count7} numbers are multiple of 7`);