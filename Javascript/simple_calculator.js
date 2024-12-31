const readline = require("readline");

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to perform arithmetic operations
function calculate(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero!";
      }
      result = num1 / num2;
      break;
    default:
      return "Invalid operator!";
  }
  return `The result is: ${result.toFixed(2)}`;
}

// Function to take user input and calculate
function startCalculator() {
  rl.question("Enter the first number: ", (firstInput) => {
    const num1 = parseFloat(firstInput);
    if (isNaN(num1)) {
      console.log("Invalid input for the first number!");
      rl.close();
      return;
    }

    rl.question("Enter the operator (+, -, *, /): ", (operator) => {
      rl.question("Enter the second number: ", (secondInput) => {
        const num2 = parseFloat(secondInput);
        if (isNaN(num2)) {
          console.log("Invalid input for the second number!");
          rl.close();
          return;
        }

        const result = calculate(num1, num2, operator);
        console.log(result);
        rl.close();
      });
    });
  });
}

// Start the calculator
startCalculator();
