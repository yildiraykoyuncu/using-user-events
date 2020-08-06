function reverseHandler(event) {
    // read user input
    const userInput = event.target.form.input.value;

    // execute core logic
    const reverse = reversed(userInput);

    // communicate result to user
    document.getElementById('program-output').innerHTML = reverse;

    // log action for developers
    console.log('\n-- user action --');
    console.log('userInput:', userInput);
    console.log('reversed:', reverse);
    console.log(event)
}