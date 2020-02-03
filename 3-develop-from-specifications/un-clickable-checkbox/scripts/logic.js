const _Tests = [
  { name: 'first', args: [3, 5], expected: 'left:3px; top:5px;' },
  { name: 'second', args: [333, 522], expected: 'X: 333\nY: 522' },
  { name: 'third', args: [223, _], expected: 'X: 223\nY: 335' },
  { name: 'fourth', args: [1223, 903], expected: _ },
  { name: 'fifth', args: [_, _], expected: _ },
];

function _(x, y) {

}

testing(_, _Tests);
