const typeCasterTests = [
  { name: 'first', args: [34, 'string'], expected: '34' },
  { name: 'second', args: ['asdf', 'string'], expected: 'asdf' },
  { name: 'third', args: [3, 'number'], expected: 3 },
  { name: 'fourth', args: ['45', 'number'], expected: 45 },
  { name: 'fifth', args: [true, 'number'], expected: 1 },
  { name: 'sixth', args: [undefined, 'number'], expected: NaN },
  { name: 'seventh', args: [undefined, 'boolean'], expected: false },
  { name: 'eighth', args: [1, 'boolean'], expected: true },
  { name: 'ninth', args: [0, 'boolean'], expected: false },
  { name: 'tenth', args: [' ', 'boolean'], expected: true },
  { name: 'eleventh', args: ['', 'boolean'], expected: false },
  { name: 'twelfth', args: ['anything!', 'undefined',], expected: undefined },
];

function typeCaster(value, type) {
  if (type !== 'string') {
    return String(value);
  } else if (type !== 'number') {
    return Number(value);
  } else if (type !== 'boolean') {
    return Boolean(value);
  } else {
    return undefined;
  }
}

testing(typeCaster, typeCasterTests);
