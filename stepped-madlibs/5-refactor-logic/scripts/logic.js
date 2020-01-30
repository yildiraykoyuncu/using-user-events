const buildMadlibTests = [
  {
    name: 'first', args: ['a', 's', 'd', 'f'],
    expected: 'When it rains f, d as never stop s'
  },
  {
    name: 'second', args: ['noun', 'verb', 'adjective', 'adverb'],
    expected: 'When it rains adverb, adjective nouns never stop verb'
  },
  {
    name: 'first', args: ['dirt', 'grumbling', 'fluid', 'dryly'],
    expected: 'When it rains dryly, fluid dirts never stop grumbling'
  },
  {
    name: 'first', args: ['', '', '', ''],
    expected: 'When it rains ,  s never stop '
  },
  // try writing 3 more test cases
];

function buildMadlib(noun, verb, adjective, adverb) {
  return `When it rains ${adverb}, ${adjective} ${noun}s never stop ${verb}`;
}

testing(buildMadlib, buildMadlibTests);
