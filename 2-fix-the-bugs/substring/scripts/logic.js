// the tests are fine!
const getPartialStringTests = [
  { name: 'first', args: ['tall', 4, 5], expected: '' },
  { name: 'second', args: ['888()888', 1, 3], expected: '88(' },
  { name: 'third', args: ['falling trees', 0, 4], expected: 'fall' },
  { name: 'fourth', args: ['mangrove', 1, 5], expected: 'angro' },
  { name: 'fifth', args: ['everafter', -1, 2], expected: 'r' },
];

// fix the function
function getPartialString(str, beginIndex, endIndex) {
  return str.substring(beginIndex, endIndex);
}

testing(getPartialString, getPartialStringTests);
