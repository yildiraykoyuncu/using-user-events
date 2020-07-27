function __(event) {
  // read & process user input
  const divId = event.target.__;

  // execute core logic
  const newColor = __(divId);

  // display results to user
  document.body.style.backgroundColor = newColor;

  // log action for developers
  console.log('\n-- setBackground --');
  console.log('divId:', '(' + typeof divId + ')', divId);
  console.log('newColor:', '(' + typeof newColor + ')', newColor);
}

function __() {
  // render results to user
  document.body.style.__ = 'white';

  // log action for developers
  console.log('\n-- unsetBackground --');
}
