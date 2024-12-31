"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// Setup readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Calc function
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
// Function for user input
function startCalculator() {
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
