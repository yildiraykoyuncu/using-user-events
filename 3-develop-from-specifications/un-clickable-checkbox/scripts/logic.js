const _Tests = [
    { name: 'Test 1', args: [3, 5], expected: 'left:3px;\ntop:5px;' },
    { name: 'Test 2', args: [333, 522], expected: 'left:333px;\ntop:522px;' },
    { name: 'Test 3', args: [223, 335], expected: 'left:223px;\ntop:335px;' },
    { name: 'Test 4', args: [1223, 903], expected: 'left:1223px;\ntop:903px;' },

];

function coordinatesToStyle(x, y) {
    return `left:${x}px;\ntop:${y}px;`
}

testing(coordinatesToStyle, _Tests);