function calculator(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return num1 / num2;
        default:
            return 'Error: Invalid operation';
    }
}

// Usage
console.log(calculator('add', 5, 3));        // Output: 8
console.log(calculator('subtract', 5, 3));   // Output: 2
console.log(calculator('multiply', 5, 3));   // Output: 15
console.log(calculator('divide', 5, 3));     // Output: 1.6666666666666667
console.log(calculator('divide', 5, 0));     // Output: Error: Division by zero
console.log(calculator('unknown', 5, 3));    // Output: Error: Invalid operation
