const {
    add,
    subtract,
    multiply,
    divide,
    modulo,
    power,
    squareRoot
} = require('../calculator');

describe('Calculator - Basic Operations', () => {
    describe('add()', () => {
        test('should add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should add negative numbers', () => {
            expect(add(-5, -3)).toBe(-8);
        });

        test('should add positive and negative numbers', () => {
            expect(add(10, -5)).toBe(5);
        });

        test('should handle zero', () => {
            expect(add(0, 5)).toBe(5);
            expect(add(5, 0)).toBe(5);
        });

        test('should handle decimal numbers', () => {
            expect(add(1.5, 2.3)).toBeCloseTo(3.8);
        });
    });

    describe('subtract()', () => {
        test('should subtract two positive numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('should subtract negative numbers', () => {
            expect(subtract(-5, -3)).toBe(-2);
        });

        test('should handle zero', () => {
            expect(subtract(5, 0)).toBe(5);
            expect(subtract(0, 5)).toBe(-5);
        });

        test('should handle decimal numbers', () => {
            expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
        });
    });

    describe('multiply()', () => {
        test('should multiply two positive numbers', () => {
            expect(multiply(4, 3)).toBe(12);
        });

        test('should multiply negative numbers', () => {
            expect(multiply(-4, -3)).toBe(12);
            expect(multiply(-4, 3)).toBe(-12);
        });

        test('should handle zero', () => {
            expect(multiply(5, 0)).toBe(0);
            expect(multiply(0, 5)).toBe(0);
        });

        test('should handle decimal numbers', () => {
            expect(multiply(2.5, 4)).toBe(10);
        });
    });

    describe('divide()', () => {
        test('should divide two positive numbers', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('should divide negative numbers', () => {
            expect(divide(-10, 2)).toBe(-5);
            expect(divide(10, -2)).toBe(-5);
            expect(divide(-10, -2)).toBe(5);
        });

        test('should handle decimal results', () => {
            expect(divide(5, 2)).toBe(2.5);
        });

        test('should throw error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
        });

        test('should handle division of zero', () => {
            expect(divide(0, 5)).toBe(0);
        });
    });
});

describe('Calculator - Extended Operations', () => {
    describe('modulo()', () => {
        test('should calculate remainder of positive numbers', () => {
            expect(modulo(10, 3)).toBe(1);
            expect(modulo(15, 4)).toBe(3);
        });

        test('should handle when dividend is smaller than divisor', () => {
            expect(modulo(3, 10)).toBe(3);
        });

        test('should handle negative numbers', () => {
            expect(modulo(-10, 3)).toBe(-1);
            expect(modulo(10, -3)).toBe(1);
        });

        test('should handle zero dividend', () => {
            expect(modulo(0, 5)).toBe(0);
        });

        test('should throw error when divisor is zero', () => {
            expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
        });

        test('should handle when result is zero', () => {
            expect(modulo(10, 5)).toBe(0);
        });
    });

    describe('power()', () => {
        test('should raise positive base to positive exponent', () => {
            expect(power(2, 3)).toBe(8);
            expect(power(5, 2)).toBe(25);
        });

        test('should handle exponent of zero', () => {
            expect(power(5, 0)).toBe(1);
            expect(power(0, 0)).toBe(1);
        });

        test('should handle base of zero', () => {
            expect(power(0, 5)).toBe(0);
        });

        test('should handle negative exponents', () => {
            expect(power(2, -2)).toBe(0.25);
            expect(power(10, -1)).toBe(0.1);
        });

        test('should handle negative base', () => {
            expect(power(-2, 3)).toBe(-8);
            expect(power(-2, 2)).toBe(4);
        });

        test('should handle decimal exponents', () => {
            expect(power(4, 0.5)).toBe(2);
            expect(power(27, 1/3)).toBeCloseTo(3);
        });

        test('should handle large numbers', () => {
            expect(power(10, 6)).toBe(1000000);
        });
    });

    describe('squareRoot()', () => {
        test('should calculate square root of positive numbers', () => {
            expect(squareRoot(4)).toBe(2);
            expect(squareRoot(9)).toBe(3);
            expect(squareRoot(16)).toBe(4);
            expect(squareRoot(25)).toBe(5);
        });

        test('should handle square root of zero', () => {
            expect(squareRoot(0)).toBe(0);
        });

        test('should handle square root of one', () => {
            expect(squareRoot(1)).toBe(1);
        });

        test('should handle decimal results', () => {
            expect(squareRoot(2)).toBeCloseTo(1.414, 3);
            expect(squareRoot(3)).toBeCloseTo(1.732, 3);
        });

        test('should handle large numbers', () => {
            expect(squareRoot(100)).toBe(10);
            expect(squareRoot(10000)).toBe(100);
        });

        test('should throw error for negative numbers', () => {
            expect(() => squareRoot(-1)).toThrow('Square root of negative number is not allowed');
            expect(() => squareRoot(-25)).toThrow('Square root of negative number is not allowed');
        });

        test('should handle decimal inputs', () => {
            expect(squareRoot(6.25)).toBe(2.5);
            expect(squareRoot(0.25)).toBe(0.5);
        });
    });
});
