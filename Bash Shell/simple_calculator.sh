#!/bin/bash

# Function to perform arithmetic operations
calculate() {
    local num1=$1
    local num2=$2
    local operator=$3
    local result

    case $operator in
    "+")
        result=$(echo "$num1 + $num2" | bc -l)
            ;;
    "-")
        result=$(echo "$num1 - $num2" | bc -l)
            ;;
    "*")
        result=$(echo "$num1 * $num2" | bc -l)
            ;;
    "/")
        if [ "$num2" == "0" ]; then
        echo "Error: Division by zero!"
        return
        fi 
        result=$(echo "$num1 / $num2" | bc -l)
        ;;
    *)
        echo "Invalid operator!"
        return
        ;;
    esac

    printf "The result is: %.2f\n" "$result"
}

# Main script
echo "Enter the First number: "
read -r num1

# Validate num1
if ! [[ $num1 =~ ^-?[0-9]+(\.[0-9]+)?$ ]]; then
    echo "Invalid input for the First number!"
    exit 1
fi

echo "Enter an operator (+, -, *, /): "
read -r operator

echo "Enter the Second number: "
read -r num2

# Validate num2
if ! [[ $num2 =~ ^-?[0-9]+(\.[0-9]+)?$ ]]; then
    echo "Invalid input for the Second number!"
    exit 1
fi

# Perform calculation
calculate "$num1" "$num2" "$operator"