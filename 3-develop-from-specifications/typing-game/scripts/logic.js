const _Tests = [
  { name: 'first', args: [1, 1], expected: 'passing' },
  { name: 'second', args: ['1', 1], expected: 'failing' },
  { name: 'third', args: [1e2, 100], expected: 'passing' },
  { name: 'fourth', args: [NaN, NaN], expected: 'failing' },
  { name: 'fifth', args: [null, undefined], expected: 'failing' },
  { name: 'sixth', args: [undefined, undefined], expected: 'passing' },
  { name: 'seventh', args: [true, false], expected: 'failing' },
  { name: 'eighth', args: [false, true], expected: 'failing' },
  { name: 'ninth', args: [false, false], expected: 'passing' },
];

function _() {

}

testing(_, _Tests);
