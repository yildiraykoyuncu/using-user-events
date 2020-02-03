const doMathTests = [
  { name: 'first', args: ['add', 4, 5], expected: 9 },
  { name: 'second', args: ['subtract', 4, 5], expected: -1 },
  { name: 'third', args: ['multiply', 4, 5], expected: 20 },
  { name: 'fourth', args: ['divide', 4, 5], expected: .8 },
  { name: 'fifth', args: ['toad', 4, 5], expected: 'invalid operation' },
];

function doMath(op, a, b) {
  if (op === 'add') {
    return a + b;
  } else if (op === 'sub') {
    return a - b;
  } else if (op === 'mul') {
    return a * b;
  } else if (op === 'div') {
    return a / b;
  } else {
    return 'invalid operation';
  }
}

testing(doMath, doMathTests);
