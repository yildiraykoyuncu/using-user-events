const _Tests = [
    { name: 'Test 1', args: [''], expected: 'https://www.google.com/search?q=' },
    { name: 'Test 2', args: ['asdf'], expected: 'https://www.google.com/search?q=asdf' },
    { name: 'Test 3', args: ['yildiray koyuncu'], expected: 'https://www.google.com/search?q=yildiray%20koyuncu' },
    { name: 'Test 4', args: ['3'], expected: 'https://www.google.com/search?q=3' },

];

function googleUrl(query) {
    const stringToUrl = encodeURIComponent(query)
    return `https://www.google.com/search?q=${stringToUrl}`
}
console.log(googleUrl('yildiray koyuncu'))
testing(googleUrl, _Tests);