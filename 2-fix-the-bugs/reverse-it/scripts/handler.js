function reverseHandler(event) {
  // read user input
  const userInput = event.input.value;

  // execute core logic
  const reverse = reversed(userInput);

  // communicate result to user
  document.getElementById('programOutput').innerHtml = reverse;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', userInput);
  console.log('reversed:', reversed);

  // for the browser
  return true;
}
