clc; clear;

num1 = (input("Enter the First number: "));
operator = input("Enter an operator (+, -, *, /): ");
num2 = (input("Enter the Second number: "));

switch operator
    case '+'
        result = num1 + num2;
    case '-'
        result = num1 - num2;
    case '*'
        result = num1 * num2;
    case '/'
        if num2 == 0
            disp('Error: Division by zero!');
            return;
        else
            result = num1 / num2;
        end
    otherwise
        disp('Invalid operator!');
        return;
end

fprintf('The result is: %.2f\n', result);