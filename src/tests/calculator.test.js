const { add, subtract, multiply, divide, calculate } = require('../calculator.js');

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

    test('should throw error on invalid operation', () => {
      expect(() => calculate(5, '%', 2)).toThrow('Invalid operation');
    });

    test('should throw error on division by zero', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Cannot divide by zero');
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
