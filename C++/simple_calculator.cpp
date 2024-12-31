#include <iostream>
#include <iomanip>

int main() {
    double num1, num2, result;
    char operator_;

    std::cout << "Enter the First number: ";
    std::cin >> num1;
    std::cout << "Enter an operator (+, -, *, /): ";
    std::cin >> operator_;
    std::cout << "Enter the Second number: ";
    std::cin >> num2;

    switch (operator_)
    {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': 
        if (num2 == 0) {
            std::cerr << "Error: Division by zero!" <<std::endl;
            return 1;
        }
        else {
            result = num1 / num2;
            break;
        }
    default:
        std::cerr << "Invalid operator!" << std::endl;
        return 1;
    }

    std::cout << "The result is: " << std::fixed << std::setprecision(2) << result << std::endl;

    return 0;
}