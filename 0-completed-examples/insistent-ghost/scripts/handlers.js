function capsLockHandler(event) {
  // read & process user input
  const userInput = event.target.value;

  // execute core logic
  const allUpperCase = capsLock(userInput);

  // display results to user
  document.getElementById('output').innerHTML = allUpperCase;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', '(' + typeof userInput + ')', userInput);
  console.log('allUpperCase:', '(' + typeof allUpperCase + ')', allUpperCase);
}
