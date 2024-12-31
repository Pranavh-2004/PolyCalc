# Calculate Function 
Function Calculate {
    param (
        [string]$num1,
        [string]$num2,
        [string]$operator
    )

    $num1 = [double]$num1
    $num2 = [double]$num2

    switch ($operator) {
        '+' { return $num1 + $num2 }
        '-' { return $num1 - $num2 }
        '*' { return $num1 * $num2 }
        '/' {
            if ($num2 -eq 0) {
                return "Error: Division by zero!"
            }
            return $num1 / $num2
        }
        Default { return "Invalid operator!" }
    }
}

# Prompt for user input
$num1 = Read-Host "Enter the First number: "
$operator = Read-Host "Enter an operator (+, -, *, /): "
$num2 = Read-Host "Enter the Second number: "

$result = Calculate -num1 $num1 -num2 $num2  -operator $operator

Write-Host "The result is: $result"