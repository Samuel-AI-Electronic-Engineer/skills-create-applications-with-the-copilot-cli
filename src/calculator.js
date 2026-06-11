#!/usr/bin/env node

// calculator.js
// Supports operations: addition (+), subtraction (-), multiplication (*), division (/)

const args = process.argv.slice(2);

function usage() {
  console.log('Usage: node src/calculator.js <number> <operator> <number>');
  console.log('Operators: +  -  *  /  or words: add sub mul div');
}

if (args.length !== 3) {
  usage();
  process.exit(0);
}

const [lhsRaw, opRaw, rhsRaw] = args;
const a = Number(lhsRaw);
const b = Number(rhsRaw);
const op = opRaw.trim();

if (!isFinite(a) || !isFinite(b)) {
  console.error('Error: both operands must be valid numbers');
  process.exit(1);
}

let result;

// Addition
if (op === '+' || op.toLowerCase() === 'add' || op === 'plus') {
  result = a + b;
}
// Subtraction
else if (op === '-' || op.toLowerCase() === 'sub' || op === 'minus') {
  result = a - b;
}
// Multiplication
else if (op === '*' || op.toLowerCase() === 'mul' || op === 'x' || op === 'X') {
  result = a * b;
}
// Division
else if (op === '/' || op.toLowerCase() === 'div') {
  if (b === 0) {
    console.error('Error: division by zero');
    process.exit(1);
  }
  result = a / b;
}
else {
  console.error(`Error: unsupported operator "${op}"`);
  usage();
  process.exit(1);
}

// Print numeric result
if (Number.isFinite(result)) {
  // Trim trailing .0 for integers for nicer output
  if (Number.isInteger(result)) {
    console.log(result);
  } else {
    console.log(result);
  }
  process.exit(0);
} else {
  console.error('Computation resulted in a non-numeric value');
  process.exit(1);
}
