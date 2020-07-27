function searchHandler(event) {
  // read & process user input
  const form = event.target.form;
  const userInput = form.query.value;

  // execute core logic
  const searchURL = generateSearchURL(userInput);

  // communicate result to user
  window.open(searchURL, '_blank');

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', '(' + typeof userInput + ')', userInput);
  console.log('searchURL:', '(' + typeof searchURL + ')', searchURL);
}

