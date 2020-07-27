const _Tests = [
  { name: 'Test 1', args: [3, 5], expected: 'left:3px; top:5px;' },
  { name: 'Test 2', args: [333, 522], expected: 'X: 333\nY: 522' },
  { name: 'Test 3', args: [223, _], expected: 'X: 223\nY: 335' },
  { name: 'Test 4', args: [1223, 903], expected: _ },
  { name: 'Test 5', args: [_, _], expected: _ },
];

function _(x, y) {

}

testing(_, _Tests);
