<?php
// Calc in PHP (CLI)

// Calculate function
function calculate($num1, $num2, $operator) {
    switch($operator) {
        case '+': return $num1 + $num2;
        case '-': return $num1 - $num2;
        case '*': return $num1 * $num2;
        case '/': 
            if ($num2 == 0) {
                return "Error: Division by zero!";
            }
            return $num1 / $num2;
        default:
            return "Invalid operator!";
    }
}

// Get user input
echo "Enter the First number: ";
$num1 = trim(fgets(STDIN)); 
echo "Enter an operator (+, -, *, /): ";
$operator = trim(fgets(STDIN)); 
echo "Enter the Second number: ";
$num2 = trim(fgets(STDIN)); 

$result = calculate($num1, $num2, $operator);
echo "The result is: $result\n";
?>