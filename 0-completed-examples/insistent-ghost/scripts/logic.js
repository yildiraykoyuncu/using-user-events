const capsLockTests = [
  { name: 'first', args: ['lower case words'], expected: 'LOWER CASE WORDS' },
  { name: 'second', args: ['1324 &*()'], expected: '1324 &*()' },
  { name: 'third', args: [''], expected: '' },
  { name: 'fourth', args: ['UPPER CASE WORDS'], expected: 'UPPER CASE WORDS' },
  { name: 'fifth', args: ['--""{}""--'], expected: '--""{}""--' },
  { name: 'sixth', args: ['String.prototype.toUpperCase'], expected: 'STRING.PROTOTYPE.TOUPPERCASE' },
];

function capsLock(aString) {
  return aString.toUpperCase();
}

testing(capsLock, capsLockTests);
