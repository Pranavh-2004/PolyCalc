package main

import (
	"fmt"
	"log"
)

func main() {
	var num1, num2 float64
	var operator string

	fmt.Print("Enter the First number: ")
	_, err := fmt.Scan(&num1)
	if err != nil {
		log.Fatal("Invalid input for the First number!")
	}

	fmt.Print("Enter an operator (+, -, *, /): ")
	_, err = fmt.Scan(&operator)
	if err != nil {
		log.Fatal("Invalid input for the operator!")
	}

	fmt.Print("Enter the Second number: ")
	_, err = fmt.Scan(&num2)
	if err != nil {
		log.Fatal("Invalid input for the Second number!")
	}

	var result float64
	switch operator {
	case "+":
		result = num1 + num2
	case "-":
		result = num1 - num2
	case "*":
		result = num1 * num2
	case "/":
		if num2 == 0 {
			fmt.Println("Error: Division by zero!")
			return
		}
		result =  num1 / num2
	default:
		fmt.Println("Invalid operator!")
		return
	}

	fmt.Printf("The result is: %.2f\n", result)
}