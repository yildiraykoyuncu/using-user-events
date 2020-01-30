const colorToStyleTests = [
  { name: 'first', args: ['red'], expected: 'background-color: red;' },
  { name: 'second', args: ['#ffcc00'], expected: 'background-color: #ffcc00;' },
  { name: 'third', args: ['#eeeeee'], expected: 'background-color: #eeeeee;' },
  { name: 'fourth', args: ['white'], expected: 'background-color: white;' },
];

function colorToStyle(colorCode) {
  return 'background-color: ' + colorCode + ';';
}

testing(colorToStyle, colorToStyleTests);
