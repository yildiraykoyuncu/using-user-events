function displaySubString(event) {
  // read & process user input
  const userString = event.target.string.value;

  const preStart = event.target.start.value;
  const start = Number(preStart);

  const preEnd = event.target.end.value;
  const end = Number(preEnd);

  // execute core logic
  const result = getPartOfString(userString, start, end);

  // communicate result to user
  document.getElementById('program-output').innerHTML = result;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userString:', userString);
  console.log('start:', start);
  console.log('end:', end);
  console.log('result:', result);
}

