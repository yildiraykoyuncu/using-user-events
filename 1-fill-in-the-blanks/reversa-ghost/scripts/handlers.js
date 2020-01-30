function reverseItHandler(event) {
  // read & process user input
  const userInput = __;

  // execute core logic
  const reversed = __(userInput);

  // display results to user
  document.getElementById('__').innerHTML = reversed;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', '(' + typeof userInput + ')', userInput);
  console.log('__:', '(' + typeof __ + ')', __);

  // tell the browser everything is OK
  return true;
}
