const colorCodeToStyleTests = [
  { name: 'first', args: ['2', '4', '6', '8', 'a', 'c'], expected: 'background-color: #2468ac;' },
  { name: 'second', args: ['f', 'f', 'c', 'c', '0', '0'], expected: 'background-color: #ffcc00;' },
  { name: 'third', args: ['e', 'e', 'e', 'e', 'e', 'e'], expected: 'background-color: #eeeeee;' },
  { name: 'fourth', args: ['1', '3', '5', '7', '9', 'b'], expected: 'background-color: #13579b;' },
];

function colorCodeToStyle(a, __, c, d, __, f) {
  return 'background-color: #' + __ + b + __ + d + e + __ + ';';
}

testing(colorCodeToStyle, colorCodeToStyleTests);
