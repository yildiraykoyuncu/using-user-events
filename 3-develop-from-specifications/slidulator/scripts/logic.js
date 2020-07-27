const _Tests = [
  { name: 'Test 1', args: ['add', 4, 5], expected: 9 },
  { name: 'Test 2', args: ['subtract', 4, 5], expected: -1 },
  { name: 'Test 3', args: ['multiply', 4, 5], expected: 20 },
  { name: 'Test 4', args: ['divide', 4, 5], expected: .8 },
  { name: 'Test 5', args: ['toad', 4, 5], expected: 'invalid operation' },
  { name: 'Test 6', args: ['', 4, 5], expected: 'invalid operation' },
];

function _() {

}

testing(_, _Tests);
