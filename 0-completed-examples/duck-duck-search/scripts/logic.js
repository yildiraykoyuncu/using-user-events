const generateSearchURLTests = [
  { name: 'Test 1', args: ['asdf'], expected: 'https://duckduckgo.com/?q=asdf' },
  { name: 'Test 2', args: ['fdsa'], expected: 'https://duckduckgo.com/?q=fdsa' },
  { name: 'Test 3', args: ['tor browser'], expected: 'https://duckduckgo.com/?q=tor%20browser' },
  { name: 'Test 4', args: ['const x = null;'], expected: 'https://duckduckgo.com/?q=const%20x%20%3D%20null%3B' },
  { name: 'Test 5', args: ['==-+_ *&^*<>diso }{[si'], expected: 'https://duckduckgo.com/?q=%3D%3D-%2B_%20*%26%5E*%3C%3Ediso%20%7D%7B%5Bsi' },
];

function generateSearchURL(searchQuery) {
  const encodedQuery = encodeURIComponent(searchQuery);
  return 'https://duckduckgo.com/?q=' + encodedQuery;
}

testing(generateSearchURL, generateSearchURLTests);
