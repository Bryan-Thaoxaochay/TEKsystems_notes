// Tuesday

function balance() {
  let year = 0;
  let balance = 10000
  const I = 0.05;

  while (balance < 20000) {
    year++;
    let interest = balance * I;
    balance += interest;
  }

  document.getElementById('tag').innerHTML += year + ": " + balance;
}

function isPrime(num) {
  let divisibleNums = 0;

  if (num < 2) return false;
  else if (num === 2) return true;
  else if (num % 2 === 0) return false;

  for (let i = 3; i < num / 2; i++) {
    if (num % i === 0) divisibleNums++;
  }

  console.log(divisibleNums >= 2 ? "No" : "Yes")
}

function dom() {
  document.getElementById('tag').innerHTML += "hello";
}

function separateExpression(expression) {
  let operands = "";
  let nums = "";
  let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < expression.length; i++) {
    numArr.includes(parseInt(expression[i])) ? nums += expression[i] + "|" : operands += expression[i] + "|";
  }

  console.log(operands);
  console.log(nums);
}

function simpleAlgorithm() {
  let userInput = "";
  let operands = "";
  let nums = "";
  let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  userInput = prompt("Enter an Arithmetic Expression");

  for (let i = 0; i < userInput.length; i++) {
    if (numArr.includes(parseInt(userInput[i]))) {
      let charCode = userInput.charCodeAt(i);
      nums += charCode + "|"
    } else {
      operands += userInput[i] + "|";
    }
  }

  console.log(nums);

}

// Wednesday

let scope = "global";

function localScope() {
  let scope = "local"
  console.log(scope);
}

localScope();
console.log(scope);