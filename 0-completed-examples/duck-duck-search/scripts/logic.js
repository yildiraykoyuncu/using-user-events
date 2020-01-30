const generateSearchURLTests = [
  { name: 'first', args: ['asdf'], expected: 'https://duckduckgo.com/?q=asdf' },
  { name: 'second', args: ['fdsa'], expected: 'https://duckduckgo.com/?q=fdsa' },
  { name: 'third', args: ['tor browser'], expected: 'https://duckduckgo.com/?q=tor%20browser' },
  { name: 'fourth', args: ['const x = null;'], expected: 'https://duckduckgo.com/?q=const%20x%20%3D%20null%3B' },
  { name: 'fifth', args: ['==-+_ *&^*<>diso }{[si'], expected: 'https://duckduckgo.com/?q=%3D%3D-%2B_%20*%26%5E*%3C%3Ediso%20%7D%7B%5Bsi' },
];

function generateSearchURL(searchQuery) {
  const encodedQuery = encodeURIComponent(searchQuery);
  return 'https://duckduckgo.com/?q=' + encodedQuery;
}

testing(generateSearchURL, generateSearchURLTests);
