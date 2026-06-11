const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
    expect(calculate(2, '+', 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
    expect(calculate(10, '-', 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
    expect(calculate(45, '*', 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
    expect(calculate(20, '/', 5)).toBe(4);
  });

  test('handles float addition correctly', () => {
    const result = calculate(0.1, '+', 0.2);
    // Floating point arithmetic: assert close to expected value
    expect(result).toBeCloseTo(0.30000000000000004);
  });

  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
    expect(() => calculate(1, '/', 0)).toThrow('Division by zero');
  });

  test('invalid numbers throw', () => {
    expect(() => calculate('foo', '+', 1)).toThrow('Invalid number');
    expect(() => calculate(1, '+', 'bar')).toThrow('Invalid number');
  });

  test('unsupported operator throws', () => {
    expect(() => calculate(1, '^', 2)).toThrow('Unsupported operator');
  });
});
