const _Tests = [
  { name: 'first', args: ['add', 4, 5], expected: 9 },
  { name: 'second', args: ['subtract', 4, 5], expected: -1 },
  { name: 'third', args: ['multiply', 4, 5], expected: 20 },
  { name: 'fourth', args: ['divide', 4, 5], expected: .8 },
  { name: 'fifth', args: ['toad', 4, 5], expected: 'invalid operation' },
  { name: 'sixth', args: ['', 4, 5], expected: 'invalid operation' },
];

function _() {

}

testing(_, _Tests);
