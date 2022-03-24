// Ask the user to give a number
let input = prompt("Enter a number between 0 and 100 (NOT 0 or 100).");
input = parseInt(input); // convert into a num

// Check if the input is not in the range: if it isn't, ask to re-enter a num
while (input <= 0 || input >= 100) {
  input = prompt("Please re-enter.");
  input = parseInt(input);
}

// Displaying the squared num
let squaredAnswer = document.getElementById("squared-answer");

let h1 = document.createElement("h1");
h1.innerHTML += (input * input);

squaredAnswer.appendChild(h1);