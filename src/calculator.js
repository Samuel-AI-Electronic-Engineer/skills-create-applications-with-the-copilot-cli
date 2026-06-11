#!/usr/bin/env node

// calculator.js
// Supports operations: addition (+), subtraction (-), multiplication (*), division (/)

// Exported functions for unit testing and programmatic use:
// - add(a, b)
// - subtract(a, b)
// - multiply(a, b)
// - divide(a, b)
// - calculate(a, operator, b)

function toNumber(n) {
  const x = Number(n);
  if (!isFinite(x)) throw new Error('Invalid number');
  return x;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function calculate(lhs, op, rhs) {
  const a = toNumber(lhs);
  const b = toNumber(rhs);
  const o = String(op).trim().toLowerCase();

  if (o === '+' || o === 'add' || o === 'plus') return add(a, b);
  if (o === '-' || o === 'sub' || o === 'minus') return subtract(a, b);
  if (o === '*' || o === 'mul' || o === 'x') return multiply(a, b);
  if (o === '/' || o === 'div') return divide(a, b);

  throw new Error(`Unsupported operator "${op}"`);
}

module.exports = { add, subtract, multiply, divide, calculate };

// CLI behavior when run directly
if (require.main === module) {
  const args = process.argv.slice(2);
  function usage() {
    console.log('Usage: node src/calculator.js <number> <operator> <number>');
    console.log('Operators: +  -  *  /  or words: add sub mul div');
  }

  if (args.length !== 3) {
    usage();
    process.exit(0);
  }

  try {
    const result = calculate(args[0], args[1], args[2]);
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}
