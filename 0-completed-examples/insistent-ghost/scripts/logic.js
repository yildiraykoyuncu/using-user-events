const capsLockTests = [
  { name: 'Test 1', args: ['lower case words'], expected: 'LOWER CASE WORDS' },
  { name: 'Test 2', args: ['1324 &*()'], expected: '1324 &*()' },
  { name: 'Test 3', args: [''], expected: '' },
  { name: 'Test 4', args: ['UPPER CASE WORDS'], expected: 'UPPER CASE WORDS' },
  { name: 'Test 5', args: ['--""{}""--'], expected: '--""{}""--' },
  { name: 'Test 6', args: ['String.prototype.toUpperCase'], expected: 'STRING.PROTOTYPE.TOUPPERCASE' },
];

function capsLock(aString) {
  return aString.toUpperCase();
}

testing(capsLock, capsLockTests);
