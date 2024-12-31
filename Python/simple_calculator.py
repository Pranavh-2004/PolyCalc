def calculator():
    try:
        num1 = float(input("Enter the First number: "))
        operator = input("Enter an operator (+, -, *, /): ")
        num2 = float(input("Enter the Second number: "))

        if operator == "+":
            result = num1 + num2
        elif operator == "-":
            result = num1 - num2
        elif operator == "*":
            result = num1 * num2
        elif operator == "/":
            if num2 == 0:
                return "Error: Division ny zero!"
            return num1 / num2
        else:
            return "Invalid operator!"
        
        return f"The result is: {result:.2f}"
    
    except ValueError:
        return "Error: Invalid input!"

print(calculator())