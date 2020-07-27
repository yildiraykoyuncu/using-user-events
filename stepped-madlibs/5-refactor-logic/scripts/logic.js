const buildMadlibTests = [
  {
    name: 'Test 1', args: ['a', 's', 'd', 'f'],
    expected: 'When it rains f, d as never stop s'
  },
  {
    name: 'Test 2', args: ['noun', 'verb', 'adjective', 'adverb'],
    expected: 'When it rains adverb, adjective nouns never stop verb'
  },
  {
    name: 'Test 1', args: ['dirt', 'grumbling', 'fluid', 'dryly'],
    expected: 'When it rains dryly, fluid dirts never stop grumbling'
  },
  {
    name: 'Test 1', args: ['', '', '', ''],
    expected: 'When it rains ,  s never stop '
  },
  // try writing 3 more test cases
];

function buildMadlib(noun, verb, adjective, adverb) {
  return `When it rains ${adverb}, ${adjective} ${noun}s never stop ${verb}`;
}

testing(buildMadlib, buildMadlibTests);
