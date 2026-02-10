const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator.js');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('2 + 3 should equal 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should handle negative numbers', () => {
      expect(add(-5, 3)).toBe(-2);
      expect(add(-5, -3)).toBe(-8);
    });

    test('should handle decimals', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('Subtraction', () => {
    test('10 - 4 should equal 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
    });

    test('should handle negative numbers', () => {
      expect(subtract(-5, 3)).toBe(-8);
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should handle decimals', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });

    test('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('45 * 2 should equal 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should handle negative numbers', () => {
      expect(multiply(-5, 3)).toBe(-15);
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should handle decimals', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('Division', () => {
    test('20 / 5 should equal 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should handle negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(-10, -2)).toBe(5);
    });

    test('should handle decimals', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should throw error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle zero as numerator', () => {
      expect(divide(0, 5)).toBe(0);
    });
  });

  describe('Modulo', () => {
    test('5 % 2 should equal 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('10 % 3 should equal 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should handle negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
      expect(modulo(10, -3)).toBe(1);
    });

    test('should handle decimals', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });

    test('should handle zero as first operand', () => {
      expect(modulo(0, 5)).toBe(0);
    });

    test('should throw error on modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo with zero');
    });

    test('should handle when dividend is less than divisor', () => {
      expect(modulo(2, 5)).toBe(2);
    });
  });

  describe('Power', () => {
    test('2 ^ 3 should equal 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('2 ^ 8 should equal 256', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should handle negative exponents', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should handle negative base', () => {
      expect(power(-2, 3)).toBe(-8);
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle zero exponent', () => {
      expect(power(5, 0)).toBe(1);
      expect(power(0, 0)).toBe(1);
    });

    test('should handle zero base', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle decimal exponents', () => {
      expect(power(4, 0.5)).toBe(2);
      expect(power(27, 1/3)).toBeCloseTo(3);
    });

    test('should handle large exponents', () => {
      expect(power(2, 10)).toBe(1024);
    });
  });

  describe('Square Root', () => {
    test('√16 should equal 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('√9 should equal 3', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('√4 should equal 2', () => {
      expect(squareRoot(4)).toBe(2);
    });

    test('should handle zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle decimals', () => {
      expect(squareRoot(2.25)).toBe(1.5);
      expect(squareRoot(6.25)).toBe(2.5);
    });

    test('should handle non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414213);
      expect(squareRoot(5)).toBeCloseTo(2.236067);
    });

    test('should throw error on negative numbers', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle large numbers', () => {
      expect(squareRoot(10000)).toBe(100);
      expect(squareRoot(1000000)).toBe(1000);
    });
  });

  describe('Calculate function', () => {
    test('should handle addition operation', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should handle subtraction operation', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should handle multiplication operation', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should handle division operation', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should handle modulo operation', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('should handle power operation', () => {
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('should handle square root operation', () => {
      expect(calculate(16, 'sqrt', 0)).toBe(4);
    });

    test('should throw error on invalid operation', () => {
      expect(() => calculate(5, '&', 2)).toThrow('Invalid operation');
    });

    test('should throw error on division by zero', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error on modulo by zero', () => {
      expect(() => calculate(10, '%', 0)).toThrow('Cannot perform modulo with zero');
    });

    test('should throw error on square root of negative', () => {
      expect(() => calculate(-4, 'sqrt', 0)).toThrow('Cannot calculate square root of a negative number');
    });
  });

  describe('Edge Cases', () => {
    test('should handle large numbers', () => {
      expect(add(999999, 1)).toBe(1000000);
      expect(multiply(1000, 1000)).toBe(1000000);
    });

    test('should handle very small decimals', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle negative zero', () => {
      expect(multiply(-1, 0)).toBe(-0);
    });
  });
});
