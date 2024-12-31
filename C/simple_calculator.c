#include <stdio.h>

int main()
{
    double num1, num2, result;
    char operator;

    printf("Enter the First number: ");
    scanf("%lf", &num1);
    printf("Enter an operator (+, -, *, /): ");
    scanf(" %c", &operator);
    printf("Enter the Second number: ");
    scanf("%lf", &num2);

    switch (operator)
    {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 == 0)
        {
            printf("Error: Division by zero! \n");
            return 1;
        }
        else
        {
            result = num1 / num2;
            break;
        }
    default:
        printf("Invalid operator! \n");
        return 1;
    }

    printf("The result is: %.2lf\n", result);

    return 0;
}