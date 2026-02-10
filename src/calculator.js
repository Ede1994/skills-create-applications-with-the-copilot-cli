#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (sqrt)
 */

// Addition
function add(a, b) {
  return a + b;
}

// Subtraction
function subtract(a, b) {
  return a - b;
}

// Multiplication
function multiply(a, b) {
  return a * b;
}

// Division
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Modulo
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero');
  }
  return a % b;
}

// Exponentiation
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function calculate(num1, operation, num2) {
  switch (operation) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return modulo(num1, num2);
    case '^':
      return power(num1, num2);
    case 'sqrt':
      return squareRoot(num1);
    default:
      throw new Error('Invalid operation. Use +, -, *, /, %, ^, or sqrt');
  }
}

function calculator() {
  const args = process.argv.slice(2);
  
  if (args.length < 2 || args.length > 3) {
    console.log('Usage: node calculator.js <number1> <operation> <number2>');
    console.log('       node calculator.js sqrt <number>');
    console.log('Operations: +, -, *, /, %, ^, sqrt');
    process.exit(1);
  }

  // Handle sqrt special case
  if (args[0] === 'sqrt') {
    const num = parseFloat(args[1]);
    if (isNaN(num)) {
      console.log('Error: Please provide a valid number');
      process.exit(1);
    }
    try {
      const result = squareRoot(num);
      console.log(`sqrt(${num}) = ${result}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
    }
    return;
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Error: Please provide valid numbers');
    process.exit(1);
  }

  try {
    const result = calculate(num1, operation, num2);
    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
}

// Run calculator if this is the main module
if (require.main === module) {
  calculator();
}
