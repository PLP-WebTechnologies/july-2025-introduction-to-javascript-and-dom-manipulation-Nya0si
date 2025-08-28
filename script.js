// Part 1: Variables and Conditionals
let age = prompt("Enter your age:");
if (age >= 18) {
  document.getElementById("ageResult").innerText = "You're an adult.";
} else {
  document.getElementById("ageResult").innerText = "You're a minor.";
}

// Part 2: Custom Functions
function greetUser(name) {
  return `Hello, ${name}! Welcome to the JavaScript demo.`;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

// Display greeting
let userName = "Nyaosi";
document.getElementById("greeting").innerText = greetUser(userName);

// Example usage of calculateTotal
console.log("Total cost:", calculateTotal(150, 3));

// Part 3: Loops

let fruits = ["Mango", "Banana", "Pineapple"];

// Using for loop to display fruits
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.innerText = fruits[i];
  document.getElementById("fruitList").appendChild(li);
}

// Countdown using while loop
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// Part 4: DOM Interactions

// Toggle visibility of a message
document.getElementById("toggleBtn").addEventListener("click", function () {
  let msg = document.getElementById("toggleMessage");
  msg.classList.toggle("hidden");
});

// Change text content dynamically
document.getElementById("toggleMessage").innerText = "Click the button to hide/show this message.";

// Create a new element on the fly
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was created with JavaScript!";
document.body.appendChild(newPara);
