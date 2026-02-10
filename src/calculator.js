/**
 * Node.js CLI Calculator
 * 
 * Supported operations:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division
 * - Modulo
 * - Exponentiation (Power)
 * - Square Root
 */

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtract b from a
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide a by b
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If b is zero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

/**
 * Calculate the remainder of a divided by b
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If b is zero
 */
function modulo(a, b) {
    if (b === 0) {
        throw new Error('Modulo by zero is not allowed');
    }
    return a % b;
}

/**
 * Raise base to the exponent power
 * @param {number} base - Base number
 * @param {number} exponent - Exponent
 * @returns {number} base raised to the power of exponent
 */
function power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Calculate the square root of a number
 * @param {number} n - Number to find square root of
 * @returns {number} Square root of n
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
    if (n < 0) {
        throw new Error('Square root of negative number is not allowed');
    }
    return Math.sqrt(n);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulo,
    power,
    squareRoot
};
