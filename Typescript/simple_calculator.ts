import * as readline from "readline";

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Calc function
function calculate(num1: number, num2: number, operator: string): string {
  let result: number;
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
function startCalculator(): void {
  rl.question("Enter the First number: ", (firstInput) => {
    const num1 = parseFloat(firstInput);
    if (isNaN(num1)) {
      console.log("Invalid input for the First number!");
      rl.close();
      return;
    }

    rl.question("Enter an operator (+, -, *, /): ", (operator) => {
      rl.question("Enter the Second number: ", (secondInput) => {
        const num2 = parseFloat(secondInput);
        if (isNaN(num2)) {
          console.log("Invalid input for the Second number!");
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

startCalculator();
