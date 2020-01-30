const createClassNameTests = [
  { name: 'first', args: ['first'], expected: 'first-class' },
  { name: 'second', args: ['second'], expected: 'second-class' },
  { name: 'third', args: ['third'], expected: 'third-class' },
  { name: 'fourth', args: ['fourth'], expected: 'fourth-class' },
  { name: 'fifth', args: ['train'], expected: 'train-class' },
];

function createClassName(which) {
  return which + '-class';
}

testing(createClassName, createClassNameTests);
